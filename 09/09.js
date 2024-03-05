//기본타입
let n1=10;
let n2=10.5;
let s1="안녕하세요.";

console.log(n1,n2,s1);
console.log("문자열의 요소에 접근:",s1.charAt(2));
    //2+ 문자열을 배열처럼 취급하여 출력한다.

//배열
let arr=['❤',1,'💋',2,]
console.log("배열",arr);
console.log("배열의 요소에 접근:",arr[1])
//배열을 오브젝트로 만들기
let obj={'❤':1,'💋':2,}//배열에는 의미없는 쉼표가능(트레일링 쉼표)
console.log("오브젝트",obj);
console.log("오브젝트의 요소에 접근:",obj['❤'])//키를 선택해야 밸류값이 출력된다.
