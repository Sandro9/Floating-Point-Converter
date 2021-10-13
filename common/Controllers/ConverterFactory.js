import HexadecimalHandler from "../Handlers/HexadecimalHandler.js";
import DecimalHandler from "../Handlers/DecimalHandler.js";
import DualHandler from "../Handlers/DualHandler.js";
import InvalidConverterType from "../../Error/InvalidConverterType.js";


export default class ConverterFactory
{
    HexadecimalHandler = new HexadecimalHandler();
    DualHandler = new DualHandler();
    DecimalHandler = new DecimalHandler();

    
    /**
     * 
     * @param {*} converterType must be "dual","decimal" or "hexadecimal"
     */
    getConverter(converterType)
    {

        if(converterType == 'dual') 
        {   
            return new DualHandler();
        } else if(converterType == 'decimal') {
            return new DecimalHandler();
        } else if(converterType == 'hexadecimal') {
            return new HexadecimalHandler();
        }
        throw new InvalidConverterType("specified invalid mode: " + mode);

    }

    
}
