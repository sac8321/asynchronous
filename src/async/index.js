const doSomethingAsync = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve('Don somenthing Asyn'),3000)
        :reject(new Error('Error'))
    })
}


const doSomething = async() =>{
    const someThing = await doSomethingAsync();
    console.log(someThing);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunciotn = async () =>{
    try{
        const something = await doSomethingAsync();
        console.log(something);
    }catch(error){
        console.error(error);
    }
}

console.log('Before2');
anotherFunciotn();
console.log('After2');