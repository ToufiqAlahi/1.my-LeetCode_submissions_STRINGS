var isPowerOfFour = function (n) {
    if (n < 1) {
        return false;
    }
    let powerOf4 = 1;
    while (powerOf4 < n) {
        powerOf4 *= 4;
    }
    return powerOf4 === n;
};