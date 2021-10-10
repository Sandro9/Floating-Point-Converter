export default class Character
{
    character = {
        length: 0,
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