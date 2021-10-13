import Number from "../../Abstract/Number.js";
export default class DualNumber extends Number
{
    number = {
        length : null,
        binary : ""
    }

    constructor()
    {
        super();
    }

    set(number)
    {
        this.number.length = number.length;
        this.number.binary = number.complete;
    }


    
}