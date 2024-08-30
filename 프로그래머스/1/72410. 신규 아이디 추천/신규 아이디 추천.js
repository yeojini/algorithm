function solution(new_id) {
    let answer = new_id;
    answer = step1(answer);
  	answer = step2(answer);
    answer = step3(answer);
    answer = step4(answer);
    answer = step5(answer);
    answer = step6(answer);
    answer = step7(answer);
    
    function step1(id){
        return id.toLowerCase();
    }
    
    function step2(id){
        return id.replace(/[^a-z0-9\-\_\.]/g, '');
    }
    
    function step3(id){
        return id.replace(/\.{2,}/g, '.');
    }
    
    function step4(id){
        return id.replace(/^\.|\.$/g,'');
    }
    
    function step5(id){
        return id === '' ? 'a' : id;
    }
    
    function step6(id){
        return step4(id.slice(0,15));
    }
    
    function step7(id){
        return id.padEnd(3,id[id.length-1])
    }
    return answer;
}