const diceImgs=[
    "./1.png","./2.png","./3.png","./4.png","./5.png","./6.png"
];
const handleClick=()=>{
const rnd = Math.floor((Math.random()*6)+1)*diceImgs.length);
const resultImg = diceImgs[rnd];

const diceImg= document.getElementById("diceImg");
    diceImgs.src= resultImg;
};

