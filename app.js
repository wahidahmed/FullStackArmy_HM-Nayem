
const obj={
    brand:'nokia',
    price:5400,
    country:'bag',
    tools:()=>{
        console.log('nokia is comming')
    }
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log('')
    }
}