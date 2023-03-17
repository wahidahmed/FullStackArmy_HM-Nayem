
const range={
    start:1,
    stop:100,
    step:5
}

range[Symbol.iterator]=function(){

    let current=this.start;
    const stop=this.stop;
    const step=this.step;
    return {
        next(){
            const o={
                value:current,
                done:current>stop
            }    
            current +=step;    
            return o;
        }
    }
}


for (const iterator of range) {
    console.log(iterator)
}