const findSecondSmallest = (numberList)=>{
let firstSmallest = Math.min();
let secondSmallest = Math.min();
for(let i=0;i<numberList.length;i++){
    if(firstSmallest>numberList[i]){
        secondSmallest = firstSmallest;
        firstSmallest = numberList[i];
    }else if(numberList[i]<secondSmallest && firstSmallest!=numberList[i]){
     secondSmallest = numberList[i];   
    }
}
return secondSmallest;
}
const numberList = [2,3,5,-1,2,7,9,8,0,1];
const result = findSecondSmallest(numberList);
console.log(result);
