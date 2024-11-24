const sumAll = function(numStart, numEnd) {
    if(typeof numStart != 'number' || typeof numEnd != 'number'){
        return 'ERROR';
    }
    if(numStart < 0 || numEnd < 0){
        return 'ERROR';
    }
    if(numStart % 1 != 0 || numEnd % 1 != 0){
        return 'ERROR';
    }

    /* Sum = (numberOfTerms*(firstTerm+lastTerm)) / 2 */
    let nTerms = numStart > numEnd ? numStart : numEnd;
    let result = nTerms * (numStart+numEnd) / 2
    return result;
};

// Do not edit below this line
module.exports = sumAll;
