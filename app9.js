const higherFn=(max,cb)=>{
    const random1=Math.floor(Math.random()*max);
    const random2=Math.floor(Math.random()*max);

    const result=cb(random1,random2);
    return result;
}


const higherFnResult=higherFn(100,(r1,r2)=>{
    return {
        r1:r1,
        r2:r2,
        sum:r1+r2,
        sub:r1-r2
    }
})

