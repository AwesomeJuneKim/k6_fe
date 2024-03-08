document.addEventListener("DOMContentLoaded",()=>{
    const circles=document.querySelectorAll(".circle");
    const rollNum=document.querySelector("button");

    rollNum.addEventListener("click",()=>{
        //첫번째 방법
        const randomNum=[];
        for(let i=0;i<circles.length;i++){
            randomNum.push(Math.floor(Math.random()*45)+1);
        }
        //제가 만들었던 코드->circles는 nodeList이므로 map이 불가하다 
        // circles.map((v)=>{
        //     randomNum.push(Math.floor(Math.random()*45)+1);

        // });
        circles.forEach((circle, index)=>{
            circle.textContent=randomNum[index];
        
        //두번째 방법
        // circles.forEach(circle=>{
        //     const randomNum1=Math.floor(Math.random()*45)+1;
        //     circle.textContent=randomNum1;
        // });
        });
    });
});