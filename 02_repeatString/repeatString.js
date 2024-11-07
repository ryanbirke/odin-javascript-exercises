const repeatString = function(string = '', num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        array = []
        for (let i = 0; i < num; i++) {
            array[i] = string
        }
        return array.join('');
    }
};

// Do not edit below this line
module.exports = repeatString;
