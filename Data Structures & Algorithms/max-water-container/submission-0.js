class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let max = 0;

        while(l < r){
            let width = r - l;
            let maxAr = Math.min(heights[l], heights[r]) * width;
            max = Math.max(max, maxAr);

            if(heights[l] <= heights[r]){
                l++;
            }else{
                r--;
            }
        }
        return max;
    }
}
