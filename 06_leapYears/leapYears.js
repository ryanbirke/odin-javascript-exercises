const leapYears = function(year) {
    const a = ((year % 400) === 0);
    const b = (((year % 4) === 0) && (!((year % 100) === 0)));
    return (a || b);
};

// Do not edit below this line
module.exports = leapYears;
