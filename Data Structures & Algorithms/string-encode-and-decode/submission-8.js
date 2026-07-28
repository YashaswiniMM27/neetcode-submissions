class Solution {
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join("");
    }

    decode(str) {
        const res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') j++;
            const len = parseInt(str.slice(i, j));
            res.push(str.slice(j + 1, j + 1 + len));
            i = j + 1 + len;
        }
        return res;
    }
}