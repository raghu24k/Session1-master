// callback funtion
let Mycallbackfunction = () =>{
    console.log("This is my callback function");

};
let MyHigherOrderFunction = (callback) =>{
    console.log("This is my higher order function");
    callback();
};
MyHigherOrderFunction(Mycallbackfunction);


//set interval
let count = 0;
function Mycallbackfunction1(){
    if (count === 5){
    clearInterval(timer);
    console.log("CLEAR INTERVAL");
    return;
    }
    count++;
    console.log("This is number Count ",count);
}
let timer = setInterval(Mycallbackfunction1,1000);