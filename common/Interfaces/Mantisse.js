export default class Mantisse
{
    mantisse = {
        length: null,
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
