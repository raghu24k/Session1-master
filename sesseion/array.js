let array1 = ["Raghu",1,2,3.5,true];
console.log(array1);

array1.push("kumar");
console.log(array1);

array1.pop();
console.log(array1);

array1.unshift("Hello");
console.log(array1);

array1.shift();
console.log(array1);

// array1.length();
console.log("Length of array1 is: " + array1.length);
 
array1[2] = "MyName";
console.log(array1);


array1.splice(1,2);
console.log("after slice: " + array1);


let fruits = [];
fruits.push("Mango");
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Orange");
fruits.push("Pineapple");
fruits.push("Grapes");
console.log(fruits);
console.log("fruits length: " + fruits.length);

subArrayofFruits = fruits.filter((fruits) => {
    return fruits.startsWith("P");
});
console.log("subArrayofFruits: " + subArrayofFruits);

let numbers = [1,2,3,4,5,6];
let numbersDouble = numbers.map((numbers ) =>{
    return numbers *2;
});
console.log("numbersDouble: " + numbersDouble);

let todo1 ={
    taskname: "learn js",
    status: "completed",
    time: ["2pm", "3pm"],
    onDelete: () =>{
        console.log("task deleted");
    },
    edit: function (){
        console.log("task edited");
    }
};
console.log(todo1.taskname);
console.log(todo1);
console.log(typeof todo1);
console.log(todo1["status"]);

todo1.taskname = "learn react js";
todo1["status"] = "incomplete";
console.log(todo1);

console.log(todo1.time[0]);
todo1.time.push("4pm");
todo1.time.splice(1,1,"5pm");
console.log(todo1.time);
todo1.onDelete();
todo1.edit();   




let container = document.getElementById("container");
console.log(container);

let h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.style.color = "red";
h1.style.backgroundColor = "yellow";
h1.style.textAlign = "center";

container.appendChild(h1);
console.log(h1);
