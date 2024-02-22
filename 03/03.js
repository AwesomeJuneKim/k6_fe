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
    else msg="안녕히 가세요";
    document.querySelector("#msgArea").innerHTML = msg;
}