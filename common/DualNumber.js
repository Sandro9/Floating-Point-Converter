import Number from "./Number.js";
export default class DualNumber extends Number
{
    number = {
        length : 0,
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