class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        def isokay(nums):
            for i in range(len(nums) - 1):
                for j in range(i + 1, len(nums)):
                    if (nums[i] & nums[j] != 0):
                        return False
            return True
        
        longest = 1
        left = 0
        right = 1
        
        while (right < len(nums) + 1):
            # print(right)
            if (isokay(nums[left : right])):
                longest = max(longest, right - left)
            else:
                while (not isokay(nums[left : right])):
                    left += 1
            right += 1
        return longest
