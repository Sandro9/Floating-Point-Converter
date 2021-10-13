export default class Character
{
    character = {
        length: null,
        dual: []
    }


    setCharacter(dual)
    {
        this.character.dual = dual.complete;
        this.character.length = dual.length;
    }


    getCharacter() {
        return this.character;
    }
}