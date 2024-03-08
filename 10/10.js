// document.addEventListener("DOMContentLoaded",()=>{
//     const circles=document.querySelectorAll(".circle");
//     const rollNum=document.querySelector("button");

//     rollNum.addEventListener("click",()=>{
//         const randomNum=[];
//         for(let i=0;i<circles.length;i++){
//             randomNum.push(Math.floor(Math.random()*45)+1);
//         }
//         //제가 만들었던 코드
//         // circles.map((v)=>{
//         //     randomNum.push(Math.floor(Math.random()*45)+1);

//         // });
//         circles.forEach((circle, index)=>{
//             circle.textContent=randomNum[index];
//         });
//     });
// });

document.addEventListener("DOMContentLoaded",()=>{
    const numDisp=document.querySelector("#lottoBox");
    const bt=document.querySelector("button");

    let nums=[];
    // 순서가 중요하므로 배열을 만든다.
    bt.addEventListener("click",()=>{
        nums=[];
        //버튼을 누를때 마다 랜덤수가 새로 생성되어야 하므로 배열을 초기화 해야함
        // 랜덤수 1~45 사이의 수가 생성됨, 중복금지(while을 써야함)
        while(nums.length<7){
            let n=Math.floor(Math.random()*45)+1;
            if(!nums.includes(n)) nums.push(n);
        }

        nums= nums.map((v)=>
            `<span class="sp${parseInt(v/10)}">${v}</span>`
            );
        nums.splice(6,0,'<span>+</span>')
        console.log(nums);

        // let tags='';
        // nums.map((v,i)=>{
        //     tags=tags+`<span class="sp${parseInt(v/10)}">${v}</span>`;
        //     console.log(tags);
        //     if(i===5)
        //     tags=tags+`<span>+</span>`;

        // });
        // numDisp.innerHTML=tags;

        // let tags=[];

        // tags= nums.map((v)=>
        //     `<span class="sp${parseInt(v/10)}">${v}</span>`
        // );
        // tags.splice(6,0,'<span>+</span>')

        // let s=tags.toString().replaceAll(',','');
        // console.log(s);

        // numDisp.innerHTML=s;
        numDisp.innerHTML=nums.toString().replaceAll(',','');



    });
});