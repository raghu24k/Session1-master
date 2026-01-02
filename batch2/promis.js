// // // callback funtion
// // let Mycallbackfunction = () =>{
// //     console.log("This is my callback function");

// // };
// // let MyHigherOrderFunction = (callback) =>{
// //     console.log("This is my higher order function");
// //     callback();
// // };
// // MyHigherOrderFunction(Mycallbackfunction);


// // //set interval
// // let count = 0;
// // function Mycallbackfunction1(){
// //     if (count === 5){
// //     clearInterval(timer);
// //     console.log("CLEAR INTERVAL");
// //     return;
// //     }
// //     count++;
// //     console.log("This is number Count ",count);
// // }
// // let timer = setInterval(Mycallbackfunction1,1000);

// // // set timeout
// // let myCall = () => console.log("myCall executed");
// // setTimeout(myCall, 3000);



// // Example of setInterval and clearInterval
// // let counter = 0;
// // function increamentCounter() {
// //   counter++;
// //   console.log(counter);
// //   if (counter === 5) {
// //     clearInterval(timer);
// //     console.log("Timer Stopped");
// //   }
// // }
// // let timer = setInterval(increamentCounter, 1000);



// //promise
// let myresolve = new Promise((resolve, reject) =>{
//     console.log("Promise is pending");
//     setTimeout(()=>{
//         resolve([
//       { watchModel: "Balmain", price: 75000 },
//       { watchModel: "Versace", price: 115000 },
//       { watchModel: "Casio", price: 5000 },
//     ]);
//     }, 3000);
// });
// // let response = myresolve;
// // console.log(response);
// async function promiseCall(){
//   let response = await myresolve;
//   console.log(response);
// }
// promiseCall();


// let myReject = new Promise((resolve, reject) =>{
//     console.log("Promise is pending");
//     setTimeout(()=>{
//         reject("Promise rejected");
//     }, 3000);
// });

// async function promiseRejectCall(){
//   try {
//     let response = await myReject;
//     console.log(response);
//   } catch (error) {
//     console.log("The error is:", error);
//   }
// }

// promiseRejectCall();


// async function myFirstGetMethodDemo() {
//   let response = await fetch("http://gorest.co.in/public/v2/users");
//   console.log(response);
// }


//
// async function myFirstGetMethodDemo() {
//   try {
//     let response = await fetch("http://gorest.co.in/public/v2/users");
//     response = await response.json();
//     console.log(response);
//   } catch (error) {
//     console.log("The error is:", error);
//   }
// }
// myFirstGetMethodDemo();
// let response = fetch("http://gorest.co.in/public/v2/users");
// console.log(response);



// async function Myfirstpostmethoddemo() {
//   try{
    
//     let data ={
//       name: "Raghuwinder Singh",
//       email: "testuser@example.com",
//       gender: "male",
//       status: "active"
//     };
//     let options = {
//       method: "POST",
//       Headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             Authorization: "cb4b4466877b3631baa723c2f483233e8ba5f3b23748bb213c823a06c16f5153"
//         },
//       body: JSON.stringify(data),
//     };
//     let response = await fetch("http://gorest.co.in/public/v2/users", options);
//     response = await response.json();
//     console.log(response);
//   } catch (error){
//     console.log("The error is:", error);
//   }
  
// }
// Myfirstpostmethoddemo();





async function myFirstGetmethodDemo() {
  try {
    // access_token = "cb4b4466877b3631baa723c2f483233e8ba5f3b23748bb213c823a06c16f5153";
    let data = {
      name: "kumarer Thaanand",
      gender: "male",
      email: "r23k@gmail.com",
      status: "Active",
    };

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer cb4b4466877b3631baa723c2f483233e8ba5f3b23748bb213c823a06c16f5153",
      },
      body: JSON.stringify(data),
    };

    let response = await fetch("https://gorest.co.in/public/v2/users", options);
    response = await response.json();
    console.log(response);
  } catch (error) {
    console.log("From Catch Block", error);
  }
}

myFirstGetmethodDemo();
