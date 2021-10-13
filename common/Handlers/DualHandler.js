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
        callback();
        var numberSplitted = this.splitString(number);
        var beforeComma = this.beforeComma(numberSplitted.beforeComma,callback);
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
            number = number * 2;
            if(number > 1) 
            {
                number--;
                dual.add(1);
                var dualNumber = 1;

            } else {
                dual.add(0);
                var dualNumber = 0;

            
            }
            callback({
                type:"afterComma",
                round: round,
                number: dualNumber
            });
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
                number: dualNumber
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
