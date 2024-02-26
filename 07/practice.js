document.addEventListener("DOMContentLoaded",()=>{
    const sel1=document.querySelector("#select1");
    const sel2=document.querySelector("#select2");

    const txt1=document.querySelector("#txt1");
    const txt2= document.querySelector("#txt2");

    txt1.addEventListener("input",()=>{
        console.log(txt1.value)
        if(sel1.value==="℃"){
            txt2.value=(parseFloat(txt1.value)*(9/5))+32;            
        }else{
            txt2.value=(parseFloat(txt1.value)-32)*(5/9);
        }
    });
});