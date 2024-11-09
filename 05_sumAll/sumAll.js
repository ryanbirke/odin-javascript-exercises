const sumAll = function(int1, int2) {
    if (!((Number.isInteger(int1) && (int1 > 0)) && 
        (Number.isInteger(int2) && (int2 > 0)))) {
        return 'ERROR';
    } else if (int1 === int2) {
        return int1;
    } else {
        const intMax = Math.max(int1, int2);
        const intMin = Math.min(int1, int2);

        array = [];

        for (let i = intMin; i <= intMax; i++) {
            array.push(i)
        }
        
        return array.reduce((sum, num) => sum + num)
    }
};

// Do not edit below this line
module.exports = sumAll;
