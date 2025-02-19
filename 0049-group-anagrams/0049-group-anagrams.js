/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // key 는 오름차순으로 정렬된 문자열 (아나그램이라고 판단하기 위한 기준)
    // value 는 key 와 아나그램인 strs 의 요소로 이루어진 문자열 배열
    const map = {};
    for(let i=0; i < strs.length; i++) {
        const str = strs[i];
        const count = getCount(str);
        if(map[count] !== undefined) {
            map[count].push(str);
        } else {
            map[count] = [str];
        }
    }
    return [...Object.values(map)];
};

// 문자열에서 알파벳의 빈도를 추출하여 숫자로 이루어진 문자열로 반환하는 함수
function getCount(str) {
    const result = new Array(26).fill(0);
    for(let i=0; i<str.length; i++) {
        const char = str[i];
        const targetIndex = String(char).charCodeAt(0) - 'a'.charCodeAt(0);
        result[targetIndex]++;
    }
    return result.join();
}