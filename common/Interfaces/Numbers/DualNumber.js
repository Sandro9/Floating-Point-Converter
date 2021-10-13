import Number from "../../Abstract/Number.js";
export default class DualNumber extends Number
{
    number = {
        length : null,
        binary : []
    }

    constructor()
    {
        super();
    }

    set(dual)
    {
        this.number.length = dual.length;
        this.number.binary = dual.complete;
    }

    add(dual)
    {
        this.number.length += 1;
        this.number.binary.push(dual);   
    }

}