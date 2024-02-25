const cursorClick=()=>{
    for(let i=0; i<=3;i++){
    const n= Math.floor(Math.random()*6)+1;
    const img=document.querySelector(`#img${i}`);
    img.setAttribute("src",`./img/${n}.png`);
    console.timeLog("Click",n);

    }
};