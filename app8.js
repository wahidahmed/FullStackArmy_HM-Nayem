
const fData={
    params:['a','b'],
    body:[`const r=a+b`,`return r`]
};

const fBody=fData.body.reduce((acc,cur)=>{
    acc+=cur +';';
    return acc;
},'');


const tf=new Function(...fData.params,fBody);

// console.log(tf(10,20));


const operations=[
    {
    args:[10,20],
    params:['a','b'],
    body:`console.log("a+b=",a+b)`}
    , {
        args:[10,20],
        params:['a','b'],
        body:`console.log("a-b=",a-b)`}
        , {
            args:[10,20],
            params:['a','b'],
            body:`console.log("a*b=",a*b)`}
]

operations.forEach((op)=>{
    const fn=new Function(...op.params,op.body);
    fn(...op.args)
})


