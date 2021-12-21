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
    let t = 0;
    for (let i = 0; i < s.length; i++) {
        let c = romanToInt[s.charAt(i)];
        let n = romanToInt[s.charAt(i + 1)];

        if (n) {
            if (c >= n) {
                t += c;
            } else {
                t += (n - c);
                i++;
            }
        } else {
            t += c;
        }

    }
    return t;
};