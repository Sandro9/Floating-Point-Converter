
export default class LengthController
{
    control(dualNumber,maxLength,type)
    {
        var diff = maxLength - dualNumber.length;
        // console.log(dualNumber);
        // console.log(maxLength);
        // console.log(diff);
        if(diff == 0)
        {
            return dualNumber;
        } else if(diff < 0) {
            // too big.
            dualNumber.length = maxLength;
            return dualNumber
        } else {
            var insert = [];
            for(let i = 0; i < diff; i++)
            {
                insert.push(0);
            }
            if(type == 'character'){
                return insert.concat(dualNumber);
            } else if(type == 'mantisse') {
                return dualNumber.concat(insert);
            }
            
        }  
    }
}