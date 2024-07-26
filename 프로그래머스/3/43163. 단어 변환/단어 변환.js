function solution(begin, target, words) {
    var answer = 0;
    const n = words.length;
    const visited = Array.from({length: n }, ()=>false);
    const queue = [[begin, 0]];
    
    while(queue.length){
        const [word, depth] = queue.shift();
        if(word === target) {
            return depth;
        }
        for(let i=0; i< n; i++) {
            const nextWord = words[i];
            if(!visited[i] && isChangable(word, nextWord)){
                visited[i] = true;
                queue.push([nextWord, depth + 1]);
            }
        }
    }
    
        // 한 알파벳만 다른 경우
    function isChangable(curWord, nextWord) {
        let cnt = 0;
        for(let i=0; i<curWord.length; i++){
            const char = curWord[i];
            if(char !== nextWord[i]) {
                if(cnt > 1) break;
                cnt++;
            }
        }
        return cnt === 1;
    };
    
    return answer;
}