
// function wait(ms){
//     const promise=new Promise((resolve)=>{
//         setTimeout(resolve,ms);
//     })

//     return promise;
// }


// wait(1000).then(()=>{
//     console.log('done');
// })


// const wait=(ms)=>new Promise((resolve)=>setTimeout(resolve,ms));

// wait(1000).then(()=>console.log('done 1'));

// wait(2000).then(()=>console.log('done 2'));

// wait(3000).then(()=>console.log('done 3'));


const axios= require('axios').default;

const userUrl=`https://jsonplaceholder.typicode.com/users`;
const prostUrl=`https://jsonplaceholder.typicode.com/posts`;
const commentUrl=`https://jsonplaceholder.typicode.com/comments`;

const username='Bret';


async function getComments(){
    const {data:user}=await axios.get(`${userUrl}?username=${username}`);
    console.log(user[0].id);
    const {data:comment}=await axios.get(`${prostUrl}?userId=${user[0].id}`);
    console.log(comment);
}

getComments();


