function solution(numbers, target) {
    var answer = 0;
    
    function solve(index, res){
        const num = numbers[index];
        if(index === numbers.length){
            if(res === target){
            	answer++;
            }
            return;
        }
        index++;
        solve(index, res + num);
        solve(index, res - num);
    }
    
    solve(0,0);
    
    return answer;
}