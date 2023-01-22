

const arr=[1,3,2,null,5,false,4,'','test',7,'law'];

for (let i = 0; i < arr.length; i++) {
    for (let j  = i; j < arr.length-1; j++) {
       if ( typeof arr[j]!== 'number' ) {
            arr[j]=arr[j+1];
       }
    }
}

console.log(arr);