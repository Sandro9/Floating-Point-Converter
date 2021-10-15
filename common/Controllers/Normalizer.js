import Mantisse from "../Interfaces/Mantisse.js";
import Character from "../Interfaces/Character.js";
import DualHandler from "../Handlers/DualHandler.js";
import Sign from "../Interfaces/Sign.js";
import LengthController from "./LengthController.js";

export default class Normalizer
{
    character = new Character();
    mantisse = new Mantisse();
    dualHandler = new DualHandler();
    lengthController = new LengthController();

    normalize(type,dualNumber,floatingPoint,callback = ((e) => {}))
    {
        //Type must be instance of Double or Float
        var index = this.findFirstOne(dualNumber);
        var offset = floatingPoint - index;
        var character = type.data.bias;
        if(index > floatingPoint)
        {
            character = character - offset;
        } else {
            character = character + offset;
        }
        
        console.log(character);
        console.log(index);

        var characterBinary = this.dualHandler.convertToDual(character);
        //now check Length 
        characterBinary = this.lengthController.control(characterBinary.complete,type.data.character,"character");
        
        callback({
            type:"calculateCharacter",
            defaultBias : type.data.bias,
            characterCalculated : character,
            characterBin: characterBinary,   
            dualNumber: dualNumber, 
            offset : offset, 
            floatingPoint : floatingPoint ?? 0
        });

        this.character.setCharacter(
        {
            complete: characterBinary,
            length: characterBinary.length
        });
        
        var mantisse = {
            length: 0,
            complete: []
        };
        dualNumber.forEach((e,idx) => {
            if(idx > index)
            {
                mantisse.complete.push(e);
            }
        });
        mantisse.complete = this.lengthController.control(mantisse.complete,type.data.mantisse,"mantisse");
        mantisse.length = mantisse.complete.length;
        this.mantisse.setMantisse(mantisse);
        
        return {
            character : this.character.character.dual,
            mantisse : this.mantisse.mantisse.dual,

        }
    } 

    

    denormalizer(dualNumber,floatingPoint)
    {

    }

    findFloatingPoint(dual,point)
    {

    }

    findFirstOne(dual)
    {
        return dual.findIndex(element => element == 1);
    }

    
}