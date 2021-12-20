/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0,
        max = 1;
    function expandAroundMiddle(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            const currentl = r - l + 1;
            if (currentl > max) {
                max = currentl;
                start = l;
            }
            l -= 1;
            r += 1;
        }
    }
    for (let i = 0; i < s.length; i++) {
        expandAroundMiddle(i - 1, i + 1);
        expandAroundMiddle(i, i + 1);
    }
    return s.slice(start, start + max);
};
