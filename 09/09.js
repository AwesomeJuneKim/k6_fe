//기본타입
let n1=10;
let n2=10.5;
let s1="안녕하세요.";

console.log(n1,n2,s1);
console.log("문자열의 요소에 접근:",s1[1]);
    //2+ 문자열을 배열처럼 취급하여 출력한다.
for(let c of s1){
    console.log(c);
}
for(let c in s1){//3+ in을 쓰면 key값이 출력된다.
    console.log(c);
}
for(let c in s1){
console.log(s1[c]);
}
//3+ 위의 차이점은 콘솔에서 확인할 수 있다.

//배열
let arr=['❤',1,'💋',2,]
console.log("배열",arr);
console.log("배열의 요소에 접근:",arr[1])
//2+ 배열의 순회
for(let i in arr){
    console.log(arr[i]);
}
for(let i of arr){
    console.log(i);
}
//배열을 오브젝트로 만들기
let obj={'❤':1,'💋':2,}//배열에는 의미없는 쉼표가능(트레일링 쉼표)
console.log("오브젝트",obj);
console.log("오브젝트의 요소에 접근:",obj['❤'])//키를 선택해야 밸류값이 출력된다.
//2+오브젝트 순회
for(let c of Object.entries(obj)){//키,밸류가 쌍으로 출력된다.
    console.log(c);
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
for(let [k,v] in Object.entries(obj)){
    console.log("오브젝트 in:",[k,v]);
}

//배열의 맵함수
console.log("배열의 맵함수")
const arr2=arr.map((v)=>{
    //3+arr에 문자를 추가하여 arr2를 만드는 방법(변수v는 아무 문자나 사용가능)
    console.log("map의 v:",v)
    return v+"👌";
});
console.log(arr2);
//3+ for...of와 같은 결과가 나오므로 배열의 출력은 맵을 쓴다.