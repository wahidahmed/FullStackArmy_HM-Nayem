
// const obj={
//     brand:'nokia',
//     price:5400,
//     country:'bag',
//     tools:()=>{
//         console.log('nokia is comming')
//     }
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log('')
//     }
// }


const arr=[1,2,3,4,5,6,7];

for(let i=0;i<(arr.length/2);i++){
    let temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;
}