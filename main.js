// let username;
// document.getElementById(mysubmit).onclick = 
// function (){
//     username = document.getElementById("text").value;
//     console.log(username);
// }

//type of conversion
// let age = 22;
// let voterequired = false;

// if (age >= 21){
//     console.log("You are required to drive");
 
//     if(voterequired){
//     console.log("You are qualified to vote");
// } else {
//     console.log("wala lang");
// } 

// }
// else{
//    console.log("You must be 18 to vote") 
// }
// callback: 
// function calculate(a, b, operation) {
//     return operation(a, b);
// }

// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;

// console.log(calculate(5, 3, add));
// console.log(calculate(5, 3, multiply));

// removing:
// const removeBtn = document.getElementById("removeBtn");

// removeBtn.addEventListener("click", function() {

//     if (container.lastChild) {
//         container.removeChild(container.lastChild);
//     }

// });


// creating:
//  const container = document.getElementById("container");
// const addBtn = document.getElementById("addBtn");

// addBtn.addEventListener("click", function() {

//     const newParagraph = document.createElement("p");

//     newParagraph.textContent = "I am new here!";

//     container.appendChild(newParagraph);

// });


//cvsun@1c@vr - avr



//array of strings
// let firstName = ["Rico","Thania", "Dave","Adelle"];
// let LastName = ["Auditor","Villamiel","Malaran","Malaran2"];
// let ages = [22, 21, 20, 19];

// alert(firstName[0] + " " + LastName[0] + " is " + ages[0] + " years old.");
// alert(firstName[1] + " " + LastName[1] + " is " + ages[1] + " years old.");
// alert(firstName[2] + " " + LastName[2] + " is " + ages[2] + " years old.");
// alert(firstName[3] + " " + LastName[3] + " is " + ages[3] + " years old.");
document.getElementById("btn").addEventListener("click", function() {
    const input = document.querySelector("input").value;
    console.log(input);
});