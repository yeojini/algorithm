## 1. 문제 이해

- 입력: 문자열 배열 (소문자로만 구성)
- 출력: 애너그램 그룹들의 배열
- 예시:
    
    ```jsx
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    ```
    
- 제약 조건:
    - 1 ≤ strs.length ≤ 10^4
    - 0 ≤ strs[i].length ≤ 100
    - strs[i]는 소문자 영문자로만 구성

## 2. 접근 방법

### 첫 번째 접근: 정렬을 이용한 방법

1. **핵심 아이디어**: 애너그램은 **정렬했을 때 동일한 문자열**이 됨
2. **알고리즘**:
    - 각 문자열을 정렬하여 Map의 키로 사용
    - 동일한 키를 가진 문자열들을 하나의 그룹으로 관리
3. **복잡도**:
    - 시간: O(n * mlogm) (n: 문자열 개수, m: 최대 문자열 길이)
    - 공간: O(n * m)

### 두 번째 접근: 문자 빈도수를 이용한 방법

1. **핵심 아이디어**: 정렬하는 부분을 최적화 할 수 없을까? → 애너그램은 각 문자의 **출현 빈도**가 동일하다
2. **알고리즘**:
    - 각 문자열의 출현 빈도를 문자열로 변환하여 Map의 키로 사용
    - 동일한 키를 가진 문자열들을 하나의 그룹으로 관리
3. **최적화 포인트**:
    - 정렬 대신 문자 빈도수를 사용하여 시간 복잡도 개선: O(mlogm) → O(m)
    - 문자열 길이가 최대 100 이므로 한 문자가 최대 100번까지 등장 가능하다 → 빈도수 문자열 생성 시 쉼표(,) 구분자를 사용한다
4. **복잡도**:
    - 시간: O(n * m)
    - 공간: O(n * m)

## 3. 풀이

```jsx
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

```
