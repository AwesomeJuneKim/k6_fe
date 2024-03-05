document.addEventListener("DOMContentLoaded",()=>{
    //컴포넌트 3개를 찝어오기 쿼리셀렉터로 (img, input, button)
    const updownImg=document.querySelector("img");
    const numInput=document.querySelector("#num");
    const bt= document.querySelector("#btn");

    let n;//랜덤 수 생성 변수
    //버튼의 클릭이벤트 달기
    let flag=false;//2+정답 맞출때 까지 랜덤 수가 변하지 않게 하기위해

    bt.addEventListener("click",()=>{//변수의 위치에 따라서 변수의 scope가 바뀐다.
    if(/*flag===false*/!flag){
        n=Math.floor(Math.random()*100)+1;
        console.log("n=",n);
        flag=true;
    }
    
    // document.querySelector("#num").value=num;
    //input 박스 내용가져오기
    if(numInput.value==''){
        // alert("숫자를 입력하세요")//인풋박스에 값이 없으면 백엔드로 데이터를 보내지 않는다.
        document.querySelector("#msg").innerHTML="<span>숫자를 입력하세요.</span>";
        numInput.focus();
        return;//return이 있으면 더이상 밑의 함수로 내려가지 않는다.
    }
});
});