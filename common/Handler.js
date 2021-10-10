export default class Handler
{
    splitString(number)
    {
        try {
            number = number.replaceAll(/\,/gmi,".");
            var split = number.split(".");
            return {
                beforeComma: split[0],
                afterComma: split[1]
            }
        } catch(e)
        {
            return {
                beforeComma: number,
                afterComma : ""
            }
        }
        
    }
}