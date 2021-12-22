const isvalid = s => {

    let stack = [];
    let pairHashMap = { "(": ")", "[": "]", "{": "}", };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (pairHashMap[char]) {
            stack.push(char);
        } else if (pairHashMap[stack.pop()] !== char) {
            return false;
        }
    }
    return stack.length === 0;

};