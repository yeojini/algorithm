/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let left = 0;
   let length = 0;
   // 문자와 문자가 마지막으로 등장한 인덱스를 저장
   let map = {};
   for(let right = 0; right < s.length; right++) {
        const char = s[right];
        // 윈도우 내에 있고 그 위치가 left 이상이면 업데이트
        while(map[char] !== undefined && map[char] >= left) {
            // 중복된 문자의 다음 위치로 이동
            left = map[char] + 1;
        }
        // 맵에 저장
        map[char] = right;

        // 최대 길이 갱신
        length = Math.max(length, right - left + 1);
   }
   return length;
};