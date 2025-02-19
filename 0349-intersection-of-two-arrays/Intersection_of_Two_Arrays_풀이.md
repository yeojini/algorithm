## 1. 문제 이해

정수 배열 nums1, num2 가 주어졌을 때, 두 배열에 모두 포함된 요소를 중복 없고 순서 상관없이 배열로 반환한다.

- 입력 : 정수 배열 num1, num2
- 출력 : num1, num2 배열에 모두 포함된 요소들의 정수 배열
- 예시
    
    ```jsx
    Input: nums1 = [1,2,2,1], nums2 = [2,2]
    Output: [2]
    ```
    
- 제약 조건
    - 입력 배열의 길이는 1 이상 1000 이하
    - 배열의 각 원소는 1이상 1000 이하

## 2. 접근 방법

### 첫번째 방법

- 핵심 아이디어 : 아이디어라고 할 것도 없이 일단 완전 탐색
    
    ```jsx
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    var intersection = function(nums1, nums2) {
        const result = [];
        for(let num1 of nums1) {
            for(let num2 of nums2) {
                if(num1 === num2 && !result.includes(num1)) {
                    result.push(num1);
                }
            }
        } 
        return result;
    };
    ```
    
- 복잡도
    - nums1 의 길이를 n, nums2 의 길이를 m 이라고 했을 때 O(n * m)

### 두번째 방법

- 핵심 아이디어 : nums1 의 요소들을 Map 에 key 로 등록하고, 두번째 배열을 순회할때 Map 에 등록되어있는지를 판단한다. 반환할 배열에 추가되면 Map 의 value 를 false 로 표시한다.
- 복잡도 : 두 문자열 배열 중 긴 문자열 배열의 길이를 n 이라고 했을 때 O(n)

## 3. 풀이

```jsx
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
```
