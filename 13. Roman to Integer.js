/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanToInt = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let currentInt = romanToInt[s.charAt(i)];
        let nextInt = romanToInt[s.charAt(i + 1)];

        if (nextInt) {
            if (currentInt >= nextInt) {
                total += currentInt;
            } else {
                total += (nextInt - currentInt);
                i++;
            }
        } else {
            total += currentInt;
        }

    }
    return total;
};

/***

var result = romanToInt("MCMXCVI"); // 1996
console.log(result);

var result2 = romanToInt("MMXXI"); // 2021
console.log(result2);

var result3 = romanToInt("MMMCMXCIX"); // 3999
console.log(result3); 

**/