class Solution {
    encode(strs) {
        return JSON.stringify(strs);
    }

    decode(str) {
        return JSON.parse(str);
    }
}