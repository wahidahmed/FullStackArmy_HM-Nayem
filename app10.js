
// function wait(ms){
//     const promise=new Promise((resolve)=>{
//         setTimeout(resolve,ms);
//     })

//     return promise;
// }


// wait(1000).then(()=>{
//     console.log('done');
// })


const wait=(ms)=>new Promise((resolve)=>setTimeout(resolve,ms));

wait(1000).then(()=>console.log('done 1'));

wait(2000).then(()=>console.log('done 2'));

wait(3000).then(()=>console.log('done 3'));