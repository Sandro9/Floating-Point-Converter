import Handler from "../Abstract/Handler.js";
import DualNumber from "../Interfaces/Numbers/DualNumber.js";

export default class DualHandler extends Handler
{
    constructor()
    {
        super();
    }

    callback = ((e) => {});

    convertToDual(number,callback = ((e) => {}))
    {
        var numberSplitted = this.splitString(number);
        var beforeComma = this.beforeComma(numberSplitted.beforeComma,callback);
        beforeComma.show().reverse();
        var afterComma = this.afterComma("0."+numberSplitted.afterComma,callback);
        return {
            beforeComma: beforeComma,
            afterComma: afterComma,
            floatingPoint : beforeComma.number.length,
            complete : beforeComma.show().concat(afterComma.show())
        }
        
    }

    afterComma(number,callback)
    {
        var dual = new DualNumber();
        var round = 0;
        while(number != 0 && round < 60)
        {
            
            if(number * 2 > 1)
            {
                dual.add(1);
                var dualNumber = 1;
            } else {
                dual.add(0);
                var dualNumber = 0;  
            }

            callback({
                type:"afterComma",
                round: round,
                rest: dualNumber ?? 0,
                currentNr: parseFloat(number).toPrecision(1)
            });
            number = number * 2;
            number = number.toPrecision(2);
            if(dualNumber == 1)
            {
                number--;
            }
            round++;
        }
        return dual;
    }

    beforeComma(number,callback)
    {

        var round = 0;
        var dual = new DualNumber();
        
        while(number != 0 && round < 60)
        {
            if(number % 2 > 0) 
            {
                dual.add(1);
                var dualNumber = 1;
            } else {
                dual.add(0);
                var dualNumber = 0;
            }
            callback({
                type:"beforeComma",
                round: round,
                rest : dualNumber,
                currentNr: number
            });
            number = parseInt(number / 2);
            round++;
        }
        return dual;
    }

    toDecimal()
    {

    }
}
