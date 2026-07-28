class Solution {
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let map = {};

        for(let char of s){
            map[char] = map[char] ? map[char] + 1 : 1;
        }

        for(let char of t){
            if(map[char]){
                map[char] -= 1;
            }else{
                return false;
            }
        }

        return true;
    }
}
