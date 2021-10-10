import HexadecimalHandler from "./HexadecimalHandler.js";
import DualHandler from "./DualHandler.js";
import InvalidMode from "./../Error/InvalidMode.js";


export default class ConverterFactory
{
    HexadecimalHandler = new HexadecimalHandler();
    DualHandler = new DualHandler();


    

    convert(number,mode = null)
    {

        if(mode !== 'float' && mode !== 'double' ) throw new InvalidMode("specified invalid mode: " + mode);
        console.log(number);
        // this.DualHandler.hello();
        return {
            dual : this.DualHandler.convert(number,"dual"),

            // hex : this.HexadecimalHandler.convert(number)
        }       
    }

    
}
