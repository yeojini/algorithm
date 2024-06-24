const memo={};


/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n===0) return 0;
    if(n===1 || n===2) return 1;
    if(!(n in memo)){
       memo[n] = tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1); 
    }
    return memo[n]; 
};