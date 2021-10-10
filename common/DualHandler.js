import Handler from "./Handler.js";
import DualNumber from "./DualNumber.js";
import InvalidMode from "../Error/InvalidMode.js";

export default class DualHandler extends Handler
{
    constructor()
    {
        super();
    }

    convert(number,mode = "dual")
    {
        console.log(number);
        var numberSplitted = this.splitString(number);
        if(mode == "dual"){
            var beforeComma = this.beforeComma(numberSplitted.beforeComma);
            var afterComma = this.afterComma("0."+numberSplitted.afterComma);
            return {
                beforeComma: beforeComma,
                afterComma: afterComma,
                floatingPoint : beforeComma.number.length,
                complete : beforeComma.show().concat(afterComma.show())
            }
        } else if(mode == "decimal") {
            this.toDecimal(number)
        } else {
            throw new InvalidMode("invalid Mode shipped, must be dual or decimal : "+ mode)
        }
    }
    afterComma(number)
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
            } else {
                dual.add(0);
            }
            round++;
        }
        return dual;
    }

    beforeComma(number)
    {
        var round = 0;
        var dual = new DualNumber();
        while(number != 0 && round < 60)
        {
            if(number % 2 > 0) 
            {
                dual.add(1);
            } else {
                dual.add(0);
            }
            number = parseInt(number / 2);
            round++;
        }
        return dual;
    }

    toDecimal()
    {

    }
}
