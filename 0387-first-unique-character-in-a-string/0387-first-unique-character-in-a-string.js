var firstUniqChar = function(s) {
    const map = new Map();
    
    // 등장 횟수 기록
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    // 첫 번째 고유 문자 찾기
    for(let i = 0; i < s.length; i++) {
        if(map.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1;
};