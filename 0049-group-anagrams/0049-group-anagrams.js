/**
 * 문자열 배열에서 애너그램 그룹을 찾아 반환하는 함수
 * @param {string[]} strs - 소문자로만 이루어진 문자열 배열
 * @return {string[][]} - 애너그램 그룹들의 배열
 */
var groupAnagrams = function(strs) {
    // key: 각 문자의 출현 빈도를 나타내는 문자열 (ex: "1,1,0,0,...,0")
    // value: 해당 문자 빈도를 가진 원본 문자열들의 배열
    const map = {};
    
    for(let i=0; i < strs.length; i++) {
        const str = strs[i];
        // 현재 문자열의 문자 빈도수 배열을 문자열로 변환하여 키로 사용
        const frequencyKey = getCharacterFrequency(str);
        
        // 해당 문자 빈도를 가진 그룹이 없으면 새로운 배열 생성
        if(!map[frequencyKey]) {
            map[frequencyKey] = [];
        } 
        // 현재 문자열을 해당 그룹에 추가
        map[frequencyKey].push(str);
    }
    
    // 모든 애너그램 그룹을 배열로 변환하여 반환
    return Object.values(map);
};

/**
 * 문자열에서 각 알파벳의 출현 빈도를 계산하여 반환하는 함수
 * @param {string} str - 빈도를 계산할 문자열
 * @return {string} - 각 알파벳(a-z)의 출현 빈도를 쉼표로 구분한 문자열
 */
function getCharacterFrequency(str) {
    // 알파벳 26개의 출현 빈도를 저장할 배열 초기화
    const frequencyArray = new Array(26).fill(0);
    
    // 문자열의 각 문자에 대해
    for(let i=0; i < str.length; i++) {
        const char = str[i];
        // 현재 문자의 알파벳 순서(0-25)를 계산
        const alphabetIndex = String(char).charCodeAt(0) - 'a'.charCodeAt(0);
        // 해당 알파벳의 출현 횟수 증가
        frequencyArray[alphabetIndex]++;
    }
    
    // 빈도 배열을 쉼표로 구분된 문자열로 변환하여 반환
    // 쉼표를 구분자로 사용하여 두 자릿수 이상의 빈도도 안전하게 처리
    return frequencyArray.join(',');
}