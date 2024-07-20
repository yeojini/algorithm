function solution(n) {
    const answer = (n+"").split("").reverse().map(val => +val);
    return answer;
}