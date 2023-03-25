
// const range={
//     start:1,
//     stop:100,
//     step:5
// }


// range[Symbol.iterator]=function(){

//     let current=this.start;
//     const stop=this.stop;
//     const step=this.step;
//     return {
//         next(){
//             const o={
//                 value:current,
//                 done:current>stop
//             }    
//             current +=step;    
//             return o;
//         }
//     }
// }






// for (const iterator of range) {
//     console.log(iterator)
// }


//*********************generator

// function * range(start=0,stop=100,step=5){
//     for(let i=start;i<=stop;i+=step){
//         yield i;
//     }
// }

// const rangeIt=range(1,10,2);

// console.log(rangeIt.next());

// console.log(rangeIt.next());

// console.log(rangeIt.next());
// console.log(rangeIt.next());
// console.log(rangeIt.next());


// for (const iterator of range()) {
//     console.log(iterator)
// }


// function * idGenerator(){
//     let index=1;
//     while (true) {
//        yield index++;
//     }
// }

// const callIdGenerator=idGenerator();

// console.log(callIdGenerator.next())
// console.log(callIdGenerator.next())

//***Async Iterator and Async Generator */

const axios=require('axios').default;

async function GetUser(){

    const {data:users}=await axios.get('https://jsonplaceholder.typicode.com/users');
return users;
}


async function * getPostByUser(users){
    const url=`https://jsonplaceholder.typicode.com/posts`;
    
    for (let i = 0; i < users.length; i++) {
        const {data:posts}=await axios.get(`${url}?userId=${users[i].id}`);

        yield posts;
    }
}

GetUser()
        .then( async (users)=>{
            // const userIterator=await getPostByUser(users);
            // await userIterator.next();
            // console.log((await userIterator.next()).value)
            for await (const iterator of getPostByUser(users)) {
                console.log(iterator)
            }
        })
        .catch((e)=>{
            console.log(e);
        })