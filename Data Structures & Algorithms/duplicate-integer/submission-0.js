class Solution {
    hasDuplicate(nums) {
        let set = new Set(nums);
        return set.size != nums.length;
    }
}
