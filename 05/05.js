// document.addEventListener("DOMContentLoaded",() =>{
    const handleClick=()=>{
    const bts= document.querySelectorAll("img");
    //쿼리셀렉터는 이미지 하나만 갖고오고 all은 모두 갖고옴
    bts.forEach((item)=>{
        const n= Math.floor(Math.random()*6)+1;
        img.setAttribute("src",`./img/${n}.png`)
        console.log("Click",n);
    });
};
// const handleClick=()=>{
//     for(let i=1;i<=3;i++){
//     const n= Math.floor(Math.random()*6)+1;
//     //2+버튼을 누를때 마다 생기는 랜덤수를 생성하는 함수를 적는곳
//     const img=document.querySelector(`#img${i}`);
//     //2+ 선택자를 찾아서 대상지정
//     img.setAttribute("src",`./img/${n}.png`);
//     //2+위의 대상에서 바꿀 속성을 적어준다.
//     console.log("Click",n);
//     //1+버튼을 누르면 n이 만들어 진다.
// }
// };