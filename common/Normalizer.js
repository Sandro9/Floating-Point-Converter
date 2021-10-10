import Mantisse from "./Mantisse.js";
import Character from "./Character.js";
import DualHandler from "./DualHandler.js";


export default class Normalizer
{
    character = new Character();
    mantisse = new Mantisse();
    dualHandler = new DualHandler();


    normalize(dualNumber,floatingPoint)
    {
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
        var biasBinary = this.dualHandler.convert(bias,"dual");
        console.log(biasBinary);
        this.character.setCharacter(
            {
                complete: biasBinary.complete,
                length: biasBinary.beforeComma.number.length
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
        mantisse.length = mantisse.complete.length;
        this.mantisse.setMantisse(mantisse);

        return {
            character : this.character,
            mantisse : this.mantisse,

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