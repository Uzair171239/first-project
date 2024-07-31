var email, name, age, gender, firstName, lastName; // string, integer, float, character
// varible name should be start with small character
// varible name should be a meningful name
// varible name can be start with underscore _ 
// varible name should be camel case or snack case
// varible name should not include any other special character
// varible name should NOT START WITH NUMBER OR ANY SPECIAL CHARACTER

email="mannan@gmail.com"
name="irtiza"
age=20
gender='M'
firstName="irtiza"
lastName="hussain"

console.log(email, name, age, gender, firstName, lastName)

console.log(email, firstName)
console.log(email, lastName)
console.log(email, gender)

// operators
// = is assigment operator
// Arithmetic operator +, -, *, /, %
// increment and decrement operators ++, --
//Comparison operators >, ===, <, >=, <=, !==
// logical operators AND(&&), OR (||) age > 15 && age < 20, name==="irtiza" || name==="uzair"

var a=20, b=20
console.log("a+b =", a+b)
console.log("a-b =", a-b)
console.log("a*b =", a*b)
console.log("a/b =", a/b)
// a++;
// b--
console.log(a, b)

// if(a > b) {
//     console.log("first number is smaller then second one")
//     console.log("hello")
// }
// if (a === b) console.log("both numbers are equal")
// if(a<=30) {
//     console.log("a is smaller then or equals to 30")
// } 
// if(a !== 30) {
//     console.log("hello")
// }
// else {
//     console.log("a is greater then 30")
// }

// console.log("other output")
var grade, percentage = 64;
if(percentage > 90) grade = "A+"
else if(percentage > 80 && percentage <= 90) grade ="A"
else if(percentage > 70 && percentage <= 80) grade ="B"
else if(percentage > 60 && percentage <= 70) grade ="C"
else if(percentage > 50 && percentage <= 60) grade ="D"
else if(percentage > 40 && percentage <= 50) grade ="E"
else grade = "F"

console.log(grade)

// You will have have two variables named speed and gear speed initial value will be zero and gear will be neutral
// if speed exceed/increase from zero to 20 range gear will change to 1st
// if speed exceed/increase from 20 to 30 range gear will change to 2nd
// if speed exceed/increase from 30 to 40 range gear will change to 3rd
// if speed exceed/increase from 40 to 50 range gear will change to 4th
// if speed exceeds from 50 gear will be 5th

// while(number < 100) {
    //     console.log(number);
    //     number++
    // }
    
var number = 100;
do {
    console.log(number);
    number++
} while(number < 100)

    var array = ["irtiza", "uzair", "majid", "ameen", "luthfi", "saleem", 20, false]
    for(var i=0; i<array.length; i++) {
        console.log(array[i])
    }