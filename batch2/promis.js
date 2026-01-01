let myCustompromise = new Promise ((resolve,reject)=>{
    console.log("Resolve promise")
    resolve([
        {name: "abc", age: 23},
        {name: "def", age: 25},
        {name: "xyz", age: 21}
    ]);
});


let myCustompromise2 = new Promise ((resolve,reject)=>{
    reject("failed");
});


async function fetchData(){
    try{
        let response = await myCustompromise;
try{
    let response = myCustompromise;
    // console.log(response);
    alert("1");
    alert("2");
    alert("3");
}catch(e){
    console.log("inside catch block");
    console.log(e);
}