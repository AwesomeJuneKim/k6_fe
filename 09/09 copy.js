
let arr=['❤',1,'💋',2,]

let arr2=arr.map((v,i)=>{
    console.log("map의 v:",v,"map의 i:",i)
    return v+"👌";
});
console.log(arr2);


console.log("배열의 맵함수2")
arr2=arr.map(v=>v+"👌");
console.log(arr2);

//!!!!!!!!!!!3/7 복습!!!!!!!!!!!!!!!!!!!!!!!!!
console.log("----------------------");
//배열을 만들어 둔 후 복사하고자 하는 배열을 대입하는 방법
arr1=[0,0,0,0,0,0]
for(let i in arr){
    arr1[i]=arr[i];
}
console.log("arr1 대입: ",arr1);
console.log("----------------------");
//5,6번째에 넣을 arr요소가 없으므로 0으로 출력된다.

arr2=[];
console.log("arr2: ",arr2);
for(let item of arr){
    arr2.push(item);//파이썬의 append가 자스의 push와 같다.
}
console.log("반복문으로 arr2= ",arr2);
console.log("----------------------");

arr2=arr.map(v=>v);
console.log("맵함수 arr2:",arr2);
console.log("----------------------");

arr2=arr.map((v,i)=>{
    console.log("map의 v:",v,"map의 i:",i)
    return v+"🌹"+i;
});
console.log(arr2);
console.log("----------------------");

arr21=[];
for(let item of arr){
    //item이 숫자인지 아닌지 구분하기
    if(isNaN(item)) arr21.push(item);
}
console.log("isNaN숫자제외: ",arr21);
console.log("----------------------");
arr21=[];
for(let item of arr){
    //item이 숫자인지 아닌지 구분하기
    if(!isNaN(item)) arr21.push(item);
}
console.log("isNaN숫자: ",arr21);
console.log("----------------------");

arr2=arr.filter((v)=>{
    //if(isNaN) console.log(v);
    return isNaN(v);//isNaN이 True일때만 돌아감
})
console.log("필터반복: ",arr2);
console.log("----------------------");

arr2=arr.filter(v=>isNaN(v))
console.log("필터반복간단: ",arr2);

// 오브젝트에 맵과 필터를 사용할 수 없으므로 오브젝트를 배열로 만들어주면 사용가능하다.

//전개 연산자
let arr22=[...arr];//arr배열을 해체시켜서 arr22에 넣어줌
console.log("전개연산자: ",arr22);