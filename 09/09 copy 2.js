
let obj={'❤':1,'💋':2,}//배열에는 의미없는 쉼표가능(트레일링 쉼표)
console.log("오브젝트",obj);
console.log("오브젝트의 요소에 접근:",obj['❤'])//키를 선택해야 밸류값이 출력된다.
//2+오브젝트 순회
for(let c of Object.entries(obj)){//키,밸류가 쌍으로 출력된다.
    console.log("Object.entries: ",c);
}
for(let c of Object.entries(obj)){
    console.log("오브젝트 키:" ,c[0]);
    console.log("오브젝트 값:" ,c[1]);
}
//3+ 위의 것을 구조분해 한 것
for(let [k,v] of Object.entries(obj)){
    console.log("오브젝트 키:" ,k);
    console.log("오브젝트 값:" ,v);
}
//내가 실험 한 것
for(let c in obj){//4+ 오브젝트 키값만 출력된다.
    console.log("오브젝트 in:",c);
}
// for(let c of obj){
//     console.log("오브젝트 of:",c);
// }->에러 출력불가
console.log("오브젝트 키배열: ", Object.keys(obj));