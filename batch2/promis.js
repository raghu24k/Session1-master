// // callback funtion
// let Mycallbackfunction = () =>{
//     console.log("This is my callback function");

// };
// let MyHigherOrderFunction = (callback) =>{
//     console.log("This is my higher order function");
//     callback();
// };
// MyHigherOrderFunction(Mycallbackfunction);


// //set interval
// let count = 0;
// function Mycallbackfunction1(){
//     if (count === 5){
//     clearInterval(timer);
//     console.log("CLEAR INTERVAL");
//     return;
//     }
//     count++;
//     console.log("This is number Count ",count);
// }
// let timer = setInterval(Mycallbackfunction1,1000);

// // set timeout
// let myCall = () => console.log("myCall executed");
// setTimeout(myCall, 3000);



// Example of setInterval and clearInterval
// let counter = 0;
// function increamentCounter() {
//   counter++;
//   console.log(counter);
//   if (counter === 5) {
//     clearInterval(timer);
//     console.log("Timer Stopped");
//   }
// }
// let timer = setInterval(increamentCounter, 1000);



//promise
let myresolve = new Promise((resolve, reject) =>{
    console.log("Promise is pending");
    setTimeout(()=>{
        resolve([
      { watchModel: "Balmain", price: 75000 },
      { watchModel: "Versace", price: 115000 },
      { watchModel: "Casio", price: 5000 },
    ]);
    }, 3000);
});
// let response = myresolve;
// console.log(response);
async function promiseCall(){
  let response = await myresolve;
  console.log(response);
}
promiseCall();


let myReject = new Promise((resolve, reject) =>{
    console.log("Promise is pending");
    setTimeout(()=>{
        reject("Promise rejected");
    }, 3000);
});

async function promiseRejectCall(){
  try {
    let response = await myReject;
    console.log(response);
  } catch (error) {
    console.log("The error is:", error);
  }
}

promiseRejectCall();

