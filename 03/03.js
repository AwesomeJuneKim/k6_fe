// 함수작성 1 (펑션 키워드 사용)
// function handleClick(n){
    //메세지 영역 가져오기1
    //document.getElementById("msgArea").innerHTML="안녕하세요";

    //메세지 영역 가져오기2
    // document.querySelector("#msgArea").innerHTML = "<h2>버튼"+n+"이 눌러졌습니다.</h2>";

    // document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다.</h2>`;

// }
// 함수 작성 2(화살표 함수) 상수 const 변수 let
const handleClick=(n)=>{
    let msg ;
    if (n==1) msg="안녕하세요";
    else if(n==2)  msg="안녕히 가세요";
    else if(n==3) msg="어서오세요";
    else msg=`버튼${n}이 클릭 되었습니다.`;
    document.querySelector("#msgArea").innerHTML = msg;
}
// !!!!!!!!!!!!!!!!2/23!!!!!!!!!!!!!!!!!!!!!!
// Dome Tree가 완성된 후 실행
// 돔 컨텐트가 로드된 후에 뒤에것(콜백함수)이 실행
// 콜백함수는 대부분 화살표 함수를 쓴다.
document.addEventListener("DOMContentLoaded",()=>{
console.log("DomeContentLoaded ok");
//버튼생성
const bt3 = document.createElement("button");
//버튼 상수를 만듦
const bt3Txt = document.createTextNode("버튼3");
//버튼에 넣을 글자를 만듦
bt3.setAttribute("id","bt3");
bt3.appendChild(bt3Txt);
//버튼에 글자를 연결
document.querySelector("#btArea2").append(bt3);
//버튼을 html에 연결

bt3.addEventListener("click",()=>{
    handleClick(3);
});
});
document.addEventListener("DOMContentLoaded",()=>{
    console.log("DomeContentLoaded okay");
    //버튼생성
    const bt4 = document.createElement("button");
    //버튼 상수를 만듦
    const bt4Txt = document.createTextNode("버튼4");
    //버튼에 넣을 글자를 만듦
    bt4.appendChild(bt4Txt);
    //버튼에 글자를 연결
    document.querySelector("#btArea2").append(bt4);
    //버튼을 html에 연결
    
    bt4.addEventListener("click",()=>{
        handleClick(4);
    });
    });