// n : 1이상 25 이하 자연수
function solution(s, n) {
    const aCharCode = "a".charCodeAt(0);
    const ACharCode = "A".charCodeAt(0);
    const zCharCode = "z".charCodeAt(0);
    const ZCharCode = "Z".charCodeAt(0);
    return [...s].map((c)=>{
        if(c===" ") return c;
        const curCharCode = c.charCodeAt(0);
        let nextCharCode = curCharCode + n;
        if(curCharCode <= zCharCode && nextCharCode > zCharCode){
            nextCharCode = nextCharCode - zCharCode + aCharCode -1;
        } 
        if(curCharCode <= ZCharCode && nextCharCode > ZCharCode){
            nextCharCode = nextCharCode - ZCharCode + ACharCode -1;
        }
        return String.fromCharCode(nextCharCode);
    }).join("");
}