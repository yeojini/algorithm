/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0;
    const charSet = new Set();
    
    for (let right = 0; right < s.length; right++) {
        // 현재 문자가 이미 Set에 있으면, 중복 문자가 없어질 때까지 left 포인터 이동
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        
        // 현재 문자를 Set에 추가
        charSet.add(s[right]);
        
        // 최대 길이 갱신
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};