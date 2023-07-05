const work=()=>{
    console.log("let u work");

}
work()
const reminder=()=>{
    console.log("plese atend the meeting");
}
setInterval(work,1000)
setTimeout(reminder,4000)
clearInterval(work)
const takeBreak=()=>{
    console.log("please rest");
}
takeBreak()