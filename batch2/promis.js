// callback funtion
let Mycallbackfunction = () =>{
    console.log("This is my callback function");

};
let MyHigherOrderFunction = (callback) =>{
    console.log("This is my higher order function");
    callback();
};
MyHigherOrderFunction(Mycallbackfunction);