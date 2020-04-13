/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x + "";
    return Array.from(str).reverse().join('') === str
};