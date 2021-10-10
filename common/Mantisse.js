export default class Mantisse
{
    mantisse = {
        length: 0,
        dual: []
    }


    setMantisse(dual)
    {
        this.mantisse.length = dual.length;
        this.mantisse.dual = dual.complete;
    }

    getMantisse()
    {
        return this.mantisse;
    }
}
