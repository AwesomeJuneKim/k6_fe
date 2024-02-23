// const diceImgs=[
//     "./1.png","./2.png","./3.png","./4.png","./5.png","./6.png"
// ];
// const handleClick=()=>{
// const rnd = Math.floor((Math.random()*6)+1)*diceImgs.length);
// const resultImg = diceImgs[rnd];

// const diceImg= document.getElementById("diceImg");
//     diceImgs.src= resultImg;
// };

document.addEventListener("DOMContentLoaded",()=>{
    const bt1=document.querySelector("#bt1");
    //1+버튼을 가져오기
    
    bt1.addEventListener("click",()=>{
        //1+버튼에 이벤트 달기
        handleClick();
    });

});
const handleClick=()=>{
    const n= Math.floor(Math.random()*6)+1;
    //2+버튼을 누를때 마다 생기는 랜덤수를 생성하는 함수를 적는곳
    console.log("Click",n);
    //1+버튼을 누르면 n이 만들어 진다.
}