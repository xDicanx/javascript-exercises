const sumAll = function(firstnumber, lastnumber) {
    if(firstnumber>lastnumber)
        {
            let biggestnumber = firstnumber;
            firstnumber = lastnumber;
            lastnumber = biggestnumber;
        }
    if(firstnumber < 0 || lastnumber < 0 || !Number.isInteger(firstnumber) || !Number.isInteger(lastnumber))
        {
            return "ERROR";
        }
        let totalsum = 0;
        for(let i = firstnumber; i <= lastnumber; i++)
            {
                totalsum += i;
            }
            return totalsum;

};

// Do not edit below this line
module.exports = sumAll;
