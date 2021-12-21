/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if (n < 1) {
        return false;
    }
    let powerOf3 = 1;
    while (powerOf3 < n) {
        powerOf3 *= 3;
    }
    return powerOf3 === n;
};