// document.addEventListener("DOMContentLoaded",() =>{

//     const handleClick=()=>{
//     const bts= document.querySelectorAll("img");
//     //쿼리셀렉터는 이미지 하나만 갖고오고 all은 모두 갖고옴
//     bts.forEach((bt)=>{
//         const n= Math.floor(Math.random()*6)+1;
//         bt.setAttribute("src",`./img/${n}.png`);
//         console.log("Click",n)
//     });
// };

/*
const handleClick=()=>{
        const bts=document.querySelectorAll(".c1");
    for(let i=0;i<=bts.length();i++){
    const n= Math.floor(Math.random()*6)+1;
    //2+버튼을 누를때 마다 생기는 랜덤수를 생성하는 함수를 적는곳
    const img=document.querySelector(`#img${i}`);
    //2+ 선택자를 찾아서 대상지정
    img.setAttribute("src",`./img/${n}.png`);
    //2+위의 대상에서 바꿀 속성을 적어준다.
    console.log("Click",n);
    //1+버튼을 누르면 n이 만들어 진다.
}
};
*/

// for of ->파이썬의 for in (가장 추천함)
// 몇번째 객체인지 인덱스를 뽑을 수 있음
const handleClick=()=>{
    const bts=document.querySelectorAll(".c1");
    const btsNum=[1,1,1];
    for(let[idx,bt] of bts.entries()){
        const n= Math.floor(Math.random()*6)+1;
        bt.setAttribute("src",`./img/${n}.png`)
        btsNum[idx]=n;

        console.log(btsNum);
    }
// for(let bt of bts){
//     const n= Math.floor(Math.random()*6)+1;
//     const btsNum=[1,1,1];//배열선언

//     bt.setAttribute("src",`./img/${n}.png`);
//     }
}