const removeFromArray = function(inputArray = [], ...searchItems) {
    console.log(searchItems)
    for (const searchItem of searchItems) {
        let index = -1;
        while ((index = inputArray.indexOf(searchItem)) > -1) {
            inputArray.splice(index, 1);
        } 
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
