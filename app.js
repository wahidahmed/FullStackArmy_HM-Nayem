
let arr=[
{id:1,value:10},
{id:2,value:20},
{id:3,value:30},
]


var index=arr.findIndex((v)=>{
    return v.id==2;
})

console.log(index);
arr[index]=200;

console.log(arr);

var obj=arr.find((v)=>{
return v.id==index;
})

obj.value=100;
console.log('obj',obj);