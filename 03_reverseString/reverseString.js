const reverseString = function(string) {
    const reverso = string.split('').reverse().join('');
    console.log(reverso)
    return reverso
};
reverseString("hello")
// Do not edit below this line
module.exports = reverseString;
