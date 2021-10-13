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

    normalize(type,dualNumber,floatingPoint)
    {
        //Type must be instance of Double or Float
        var index = this.findFirstOne(dualNumber);
        var offset = floatingPoint - index;
        var bias = 127;
        if(index > floatingPoint)
        {
            bias = bias - offset;
        } else {
            bias = bias + offset;
        }

        console.log(bias);
        console.log(index);
        var biasBinary = this.dualHandler.convertToDual(bias);

        //now check Length 

        biasBinary = this.lengthController.control(biasBinary.complete,type.data.character,"character");
        console.log(biasBinary);
        this.character.setCharacter(
            {
                complete: biasBinary,
                length: biasBinary.length
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