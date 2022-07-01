// 'use secure'


// let x = 12;
//  x = 40;

// var  y  = "happy";

// const cars = ["volvo", "benz", "toyota", 45 , [13,50,80,90]] 



// console.log(x)
// console.log(y)
// console.log(cars[2])

var x = 7;
var y = 2;
var z = x + y;
console.log(z)

var carName;
console.log(carName)

var x = "John" + " " + "Doe"
console.log(x)

var x = "Hello" + 3;
console.log(x)

var ourStr = "I come first. "
ourStr += "I come second"
console.log(ourStr)

var yourStr = "The first sentence. "
yourStr += "The second sentence."
console.log(yourStr)

var myName = "Goodness"
var ourName = "My name is " + myName + " What's yours?"
console.log(ourName)

var aStr = "My name is ";
var twoStr = "Goodness";
aStr += twoStr;
console.log(aStr)

var ourArray = [50, "Joy", 60, 70];
// var ourArray = ourArray.shift()
// console.log(ourArray)
// ourArray.splice()
ourArray.sort()
console.log(ourArray)

function myReusableFunction() {
    console.log("Hi Earthlings!")
}

myReusableFunction();

function add(number1, number2) {
    let sum = number1 + number2;
    return sum;
}

let anArr = [20, 10, 5, 4, 45, 92];
let arranged = anArr.sort(function(a, b){return b - a });
console.log(arranged)


let num1 = 2;
let num2 = 3;
let sum = add(num1, num2);
alert(sum)

// If age is less than 18, display "You're an adult", else, display "You're an adult"
// if(age < 18) {
//     alert("You're not an adult");
// } else {
//     alert("You're an adult");
// }


let herArray = ["dogs", "goats", "sheep", "lions", "rats", "hyenas", "monkeys"]
console.log(herArray);

// splice adds to an array 
// start from and how many items to remove 
herArray.splice(2, 0, 'rams')
console.log(herArray)

// sorting arrays
let sorted = herArray.sort();
console.log(sorted)

// reverse 
let reversed = herArray.reverse();
console.log(reversed)

// sorting numbers 
let myNum = [2, 10, 25, 4, 5, 9, 30]
console.log(myNum)

let sortedNumbers = myNum.sort(function (a, b) {
    return a - b
})
// console.log(sortedNumbers)
document.getElementById("highno").innerHTML = sortedNumbers[sortedNumbers.length-1]
// 
let animalHolder = document.querySelector('.animal-holder')

let li = ''

// herArray.forEach(function (animal){
//     li += `
//       <li>${animal}</li>
//     `
// })

for(let i = 0; i < herArray.length; i++) {
        li += `
          <li>${herArray[i]}</li>
        `
}

animalHolder.innerHTML = li

function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log (compareEquality(15, "15"))

let myArray = ["shoes", ];

let thecards = document.querySelector('.thecards')
let cardholder = ''
myArray.forEach((trainee) => {
     cardholder += `

     `
})
 
thecards.innerHTML = cardholder;

var nice = herFunction(12, 3)
function herFunction(a, b) {
    return a / b 
}

console.log(herFunction)
