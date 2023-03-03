

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

  let updatedObj=studentArr.find((v)=>v.id==updatedId);
  console.log(updatedObj);

  updatedObj.name=updatedData.name;
  updatedObj.emial=updatedData.email;

  console.log(studentArr);