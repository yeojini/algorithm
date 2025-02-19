/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const result = [];
    const map = {};
    
    // nums1의 요소들을 map에 등록
    for(let num of nums1) {
        map[num] = true;
    }
    
    // nums2를 순회하면서 교집합 찾기
    for(let num of nums2) {
        // map에 있고 아직 result에 추가되지 않은 경우에만 추가
        if(map[num]) {
            result.push(num);
            map[num] = false;  // 이미 추가된 숫자는 false로 표시
        }
    }
    
    return result;
};