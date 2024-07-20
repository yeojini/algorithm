function solution(s) {
    return s.split(" ").map((w)=>{
        return w.split("").map((c, index)=>{
            return index % 2 === 0 ? c.toUpperCase() : c.toLowerCase(); 
        }).join("");
    }).join(" ");
}