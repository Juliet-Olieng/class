let success=true
let promise= new Promise((resolve,reject)=>{
    if (success){
        setTimeout(()=>{resolve("i succeeded")},5000)
        
    }
    else{
        setTimeout(()=>{reject("i still looking for a job")},5000);
        
    }
});
// .then(()=>{console.log("i will work hard");})
// .catch(()=>{console.log("i will up skill");})
// .finally(()=>{console.log("i am worthy");})
// console.log({promise});
const student= async()=>{
    let result= await promise;
    console.log({result});
}
student()