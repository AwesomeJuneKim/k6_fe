document.addEventListener("DOMContentLoaded",()=>{
    const circles=document.querySelectorAll(".circle");
    const rollNum=document.querySelector("button");

    rollNum.addEventListener("click",()=>{
        const randomNum=[];
        for(let i=0;i<circles.length;i++){
            randomNum.push(Math.floor(Math.random()*45)+1);
        }
        //제가 만들었던 코드
        // circles.map((v)=>{
        //     randomNum.push(Math.floor(Math.random()*45)+1);

        // });
        circles.forEach((circle, index)=>{
            circle.textContent=randomNum[index];
        });
    });
});