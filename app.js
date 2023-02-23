const counterEl = document.getElementById("counter")
const decrementEl = document.getElementById("decrement")
const resettEl = document.getElementById("reset")
const incrementEl = document.getElementById("increment")
const timerEl = document.getElementById("timer")
const inputEl = document.getElementById("input")
const inputElValue = Number(inputEl.value)

let count = 0
let timerId ;

decrementEl.addEventListener("click",()=>{
    count--
    counterEl.innerHTML = `${count}`
})
resettEl.addEventListener("click",()=>{
    count=0
    counterEl.innerHTML = `${count}`
})
incrementEl.addEventListener("click",()=>{
    count++
    counterEl.innerHTML = `${count}`
})
timerEl.addEventListener("click",()=>{
    console.log("clicked")
    console.log(inputElValue)
    if(timerId){
        clearInterval(timerId);
        timerId=null
    } else {
        timerId = setInterval(()=>{
            count += inputElValue
            counterEl.innerHTML = `${count}`
        },1000);
    }
})


