var isPowerOfTwo = function (n) {
    if (n < 1) {
        return false;
    }
    let p = 1;
    while (p < n) {
        p *= 2;
    }
    return p === n;
};