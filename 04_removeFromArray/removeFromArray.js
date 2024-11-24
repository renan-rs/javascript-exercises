const removeFromArray = function(userArray, ...removeValues) {
    let result = Array.from(userArray);
    removeValues.forEach((arg) => {
        result = result.filter((x) => x !== arg);  
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
