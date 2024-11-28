const palindromes = function (str) {
    let strClean = str.trim().replace(/[\s+.,!?]/g, "").toLowerCase();
    let strReversed = Array.from(strClean).toReversed().join("");
    return strClean === strReversed;
};

// Do not edit below this line
module.exports = palindromes;
