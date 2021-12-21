/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const p = {};

    //Fill sCharCounts
    for (let i = 0; i < s.length; i++) {
        const q = s[i];
        p[q] = p[q] + 1 || 1;
    }
    for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (!p[r]) {
            return false;
        } else {
            p[r]--;
        }
    }
    return true;
};