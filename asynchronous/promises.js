let success=false
let promise= new Promise((resolve,reject)=>{
    if (success){
        resolve("i succeeded")
    }
    else{
        reject("i still looking for a job")
    }
}).then(()=>{console.log("i will work hard");})
.catch(()=>{console.log("i will up skill");})
.finally(()=>{console.log("i am worthy");})
console.log({promise});