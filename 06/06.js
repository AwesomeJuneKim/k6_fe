const handleClick=(n)=>{
    const img1=document.querySelector("#img1");
    const bts2=document.querySelector("#img2");
    const btsNum=[0];
    const nc= Math.floor(Math.random()*6)+1;
    img1.setAttribute("src",`../05/img/${nc}.png`)
    img2.setAttribute("src",`../05/img/${n}.png`)
    if (n==nc){
        document.querySelector("#msg").innerHTML="맞음";
    }else{document.querySelector("#msg").innerHTML="틀림";}
    
}