/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length === 1) {
        return [strs];
    }
    // key 는 오름차순으로 정렬된 문자열 (아나그램이라고 판단하기 위한 기준)
    // value 는 key 와 아나그램인 strs 의 요소로 이루어진 문자열 배열
    const map = {};
    for(let i=0; i < strs.length; i++) {
        const str = strs[i];
        const sortedStr = str.length === 1 ? str : str.split('').sort().join();
        if(map[sortedStr] !== undefined) {
            map[sortedStr].push(str);
        } else {
            map[sortedStr] = [str];
        }
    }
    return [...Object.values(map)];
};