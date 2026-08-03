class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let leftMax = 0;
        let rightMax = 0;
        let trapped = 0;

        while(left < right){
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);

            if(height[left] < height[right]){
                trapped += leftMax - height[left];
                left++;
            }else{
                trapped += rightMax - height[right];
                right--;
            }
        }
        return trapped;
    }
}
