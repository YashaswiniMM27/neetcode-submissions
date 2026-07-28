class Solution {
    encode(strs) {
        return strs.map(s => s.length + "#" + s).join("");
    }

    decode(str) {
        const res = [];
        let i = 0;
        while (i < str.length) {
            const hashIdx = str.indexOf("#", i);
            const len = Number(str.slice(i, hashIdx));
            res.push(str.slice(hashIdx + 1, hashIdx + 1 + len));
            i = hashIdx + 1 + len;
        }
        return res;
    }
}