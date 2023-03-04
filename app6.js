

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  

  const studentArr=[
    {
        id: 'ca808d5d-94cd-43fd-bda9-a6525ba6ad30',
        name: 'wahid',
        emial: 'w@gmail.com'
      },
      {
        id: '2c851137-7f7f-44c7-8ad2-e01e017f0869',
        name: 'ahmed',
        emial: 'wah@gmail.com'
      },
      {
        id: 'a607d9c3-8e08-45ab-b676-3af7b635d615',
        name: 'nadim',
        emial: 'na@gmail.com'
      },
      {
        id: '89b8d9d8-8804-4abb-be37-68923a8bd99e',
        name: 'ripon',
        emial: 'ri@gmail.com'
      }
  ]

  let updatedId='89b8d9d8-8804-4abb-be37-68923a8bd99e';

  const updatedData={
    name:'fahim',
    email:'fahim@gmail.com'
  }

  let updatedObj=studentArr.findIndex((v)=>v.id==updatedId);
  
  studentArr[updatedObj]={
    ...studentArr[updatedObj],
    ...updatedData
  }


  // console.log(studentArr);


  const studentObj={
    'ca808d5d-94cd-43fd-bda9-a6525ba6ad30':{
      id: 'ca808d5d-94cd-43fd-bda9-a6525ba6ad30',
      name: 'wahid',
      emial: 'w@gmail.com'
    },
    '2c851137-7f7f-44c7-8ad2-e01e017f0869':{
      id: '2c851137-7f7f-44c7-8ad2-e01e017f0869',
      name: 'ahmed',
      emial: 'wah@gmail.com'
    },
    'a607d9c3-8e08-45ab-b676-3af7b635d615':{
      id: 'a607d9c3-8e08-45ab-b676-3af7b635d615',
      name: 'nadim',
      emial: 'na@gmail.com'
    },
    '89b8d9d8-8804-4abb-be37-68923a8bd99e':{
      id: '89b8d9d8-8804-4abb-be37-68923a8bd99e',
      name: 'ripon',
      emial: 'ri@gmail.com'
    }
  }
   

  
  // const arr=[];
  // const arrObj={};

  // for (let i = 0; i < 5000000; i++) {
  //   const o={
  //     id:i,
  //     value:i
  //   }

  //   arr.push(o);
  //   arrObj[i]=o;
    
  // }

  // let idForUpdate=4999999;

  // console.time('array');
  // let findForArr=arr.find((item)=>item.id==idForUpdate)

  // findForArr.value=500;

//   console.timeEnd('array');

//  console.time('obj');
//   arrObj[idForUpdate].value=600;
//   console.timeEnd('obj');


  // const reduceArr=[];

  // for(let i=0;i<=5000000;i++){
  //   reduceArr.push(i);
  // }

  // console.time('filter and map')
  // reduceArr.filter((item)=>item%2===0).map((item)=>item*2);
  // console.timeEnd('filter and map')

  // console.time('reduce')
  // reduceArr.reduce((acc,cur)=>{
  //   if(cur%2===0){
  //     acc.push(cur*2);
  //   }
  //   return acc;
  // },[])
  // console.timeEnd('reduce')



  function myReduce(arr,cb,init){
    let acc=init;
    for(let i=0;i<arr.length;i++){
      acc=cb(acc,arr[i],i,arr);
    }
    return acc;
  }

  const sum=myReduce([1,2,3,4],(a,b)=>a+b,0);

  console.log(sum);


  const result=myReduce([1,2,4,'',null,3,false],
    (acc,cur)=>{
      if(cur){
        acc.push(cur+2)
      }
      return acc;
    },[]
  )

  console.log(result);





























