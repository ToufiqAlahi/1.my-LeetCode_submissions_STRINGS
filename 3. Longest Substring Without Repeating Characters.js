/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {

    const winCharsMap = {};
    let winStart = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
       
        const winEnd = s[i];

        if (winCharsMap[winEnd] >= winStart) {

            winStart = winCharsMap[winEnd] + 1;
        }

        winCharsMap[winEnd] = i;

        maxLength = Math.max(maxLength, i - winStart + 1);
    }

    return maxLength;
};

/***
const s = "abcabaaacaaaabb"; //shows 3
console.log("Longest subString possible in the string '" + s + "': " + lengthOfLongestSubstring(s));

const s2 = "agjioedfsfaaaabb"; // shows 8
console.log("Longest subString possible in the string '" + s2 + "': " + lengthOfLongestSubstring(s2));
**/