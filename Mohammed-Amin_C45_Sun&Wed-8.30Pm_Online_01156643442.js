//                        Assignment1

// A. Part 1:
//Q1
var x = "123";
var result = Number(x) + 7;
console.log({result});
//
//Q2
var x = 0;
x > 0 ? console.log(Boolean(x)) : console.log("Invalid");
//
//Q3
for (let i = 1; i <= 10; i++) {

     if (i % 2 == 0) continue;
     console.log(i);
 }
//
//Q4
 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const evenArr = arr.filter((ele, index, arr) => {
     return ele % 2 == 0
 })
 console.log(evenArr);
//
//Q5
 const arr1 = [1,2,3]
 const arr2 = [4,5,6]

 const result = [...arr1,...arr2]
 console.log(result);
//
//Q6
 var day = 5;
 switch (day) {
     case 1:
         console.log("Sunday");
         break;
     case 2:
          console.log("Monday");
         break;
     case 3:
          console.log("Tuesday");
         break;
     case 4:
          console.log("Wednesday");
         break;
     case 5:
          console.log("Thursday");
         break;
     case 6:
          console.log("Friday");
         break;
     case 7:
          console.log("Saturday");
         break;

     default:
          console.log("Invalid number!");
         break;
 }
//
//Q7
 const arr = ["a", "ab", "abc"]
 const lengths = arr.map((ele,index,arr) => {
     return ele.length;
 })
 console.log(lengths);

//
//Q8
 function isDivisible(num) {
     if (num % 3 == 0 && num % 5 == 0) {
         console.log("Divisible by both");
     }
     else if (num % 3 == 0 && num % 5 != 0) {
         console.log("Divisible by 3 only");
     }
     else if (num % 3 != 0 && num % 5 == 0) {
         console.log("Divisible by 5 only");
     }
     else console.log("Not divisible by both");
 }

 const x = 15
 isDivisible(x)
//
//Q9
 const squareOfNum = num => num*num ;
 const x =5
 console.log(squareOfNum(x));
//
//Q10
 function destruct(data={}) {
     const{name,age} = data
     console.log(name + " is " + age + " years old");
 }

 const person = {name: 'John', age: 25}
 destruct(person)
//
//Q11
 function sum(data = {}) {
     const { n1, n2, n3 = 0, n4 = 0, n5 = 0 } = data
     const result = n1 + n2 + n3 + n4 + n5
     return result
 }

 console.log(sum({n1:1,n2:3}));
//
//Q12
 function success() {
     return new Promise((resolve, reject) => {
         console.log("Waiting ...");
        
         setTimeout(() => {
             resolve("Success")
         },3000)
     })
 }
 success().then((data) => {
     console.log(data);
    
 })


//Q13
 function maxElement (array){
 return Math.max(...array)
 }
 function maximum (array) {
     let max = array[0]
     for (let i = 0; i < array.length; i++) {
         if(array[i] > max) max = array[i]
     }
     return max
 }

 const arr = [1, 3, 7, 2, 4, 25, 17, 82, -125]
 console.log(maximum(arr));
//
//Q14
 function keys(obj) {
     return Object.keys(obj)
 }
 const person = { name: 'John', age: 25, gender: 'male' }
 console.log(keys(person))
//
//Q15
 function split (x) {
     console.log(x.split(" "));
 }

 var x = "The Quik Brown Box"
 split(x)


//B. Part 2:
//1. What is the difference between forEach and for...of? When would you use each?
//Answer:
//-ForEach : cannot handle async or await, cannot use break or continue,used to perform multiple requests in same time.
//-for...of : can handle async or await, can use break or continue, used to check faliure during requests.
//2. What is hoisting and what is the Temporal Dead Zone (TDZ)?
//Answer:
//-Hoisting : Declaration of variable(var) done at the beggining of the scope without assingning value to this variable
//var x;
//console.log(x); => x here is undefined but declared
//x = 2
//TDZ : The lines between variable(let or const) access and intialization is called temporal dead zone
//console.log(x) => x cannot be accesed
// let x;
//3. What are the main differences between == and ===?
//Answer : == checks only value while === checks valaue and data type.
//5. What’s the difference between type conversion and coercion?
//Answer :
//-Conversion : To convert variable data type to another.
//example:
// let x = 5 => Number
// x = Boolean(x) => boolean
// x = String(x) => string
//-Coercion : Automatic correction from data type to another to performe an operation.
//(12 + "5") => (+ concatnation) => "125"
//(12 - "5") => 8 ("5 will be number")
//(12 * false) => 0 (false will be 0)

