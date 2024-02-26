const handleChange = (s1, s2, lb1, lb2, t1, t2)=>{
    if(s1.value==="℃") {
        s2.value="℉";
        lb1.innerHTML="℃";
        lb2.innerHTML="℉";
    }
    else{
        s2.value="℃";
        lb1.innerHTML="℉";
        lb2.innerHTML="℃";
    }
    t1.value="";
    t1.focus();
    t2.value="";
} 
const handelTxt=()=>{
    console.log("t")
}
//2+ 섭씨를 화씨로 바꾸는 함수를 만들어 줌


document.addEventListener("DOMContentLoaded",()=>{
    const sel1= document.querySelector("#sel1");
    const sel2= document.querySelector("#sel2");

    const txt1= document.querySelector("#txt1");
    const txt2= document.querySelector("#txt2");

    const labels= document.querySelectorAll("label");

    txt1.addEventListener("input",()=>{

        console.log(txt1.value)
        if(sel1.value==="℃"){
            txt2.value=(parseFloat(txt1.value)*(9/5))+32;
        }
        else{txt2.value=(parseFloat(txt1.value)-32)*(5/9);
    }

        });
    
        

    // sel1.addEventListener("change",()=>{
    //     console.log(sel1.value);
    //     if(sel1.value==="℃")sel2.value="℉";
    //     else sel2.value="℃";
    // });
    // sel2.addEventListener("change",()=>{
    //     console.log(sel2.value);
    //     if(sel2.value==="℃")sel1.value="℉";
    //     else sel1.value="℃";
    // });
    //  위의 두 코드가 겹치므로 하나로 줄인다.
    sel1.addEventListener("change",()=>{
        handleChange(sel1,sel2, labels[0], labels[1], txt1, txt2);
    });
    sel2.addEventListener("change",()=>{
        handleChange(sel2,sel1, labels[1], labels[0], txt1, txt2);
    });
    //2+간단하게 함수를 적용하면 된다.


});