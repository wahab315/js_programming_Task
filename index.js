///////////////////////////////
// Write a program that can find the largest of the three numbers
// let firstNum = 4;
// let secondNum = 16;
// let thirdNum = 10;
// if (firstNum >= secondNum && firstNum >= thirdNum) {
//   console.log("First Number is Greater with the value of " + firstNum);
// } else if (secondNum >= firstNum && secondNum >= thirdNum) {
//   console.log("Second Number is Greater with the value of " + secondNum);
// } else {
//   console.log("Third Number is Greater with the value of " + thirdNum);
// }

////////////////////////////////
// Write a program to find the ratio of two numbers
// let firstValue = 15;
// let secondValue = 3;
// console.log("Ratio of these two number is " + firstNum / secondNum);

////////////////////////////////
// Write a program that will print number 1 to 7 and their cubes separated by a tab using for loop.
// for (let index = 1; index <= 7; index++) {
//   const cubes = index * index * index;
//   console.log(index + " cube " + cubes);
// }

////////////////////////////////
// Write a program that prints the multiplication table of 12 from 1 to 10 using for loop
// for (let index = 1; index <= 10; index++) {
//   const anwer = 12 * index;
//   console.log(`12 x ${index} = ${anwer}`);
// }

////////////////////////////////
// Write a program that will take a number from user and will print its factorial at output. You must take care of negative number and zero as well
// const inputNumber = 10;
// const arr = [];
// let result = 1;
// if (inputNumber <= 0) {
//   console.log("Please Enter Valid value here ");
// }
// for (let index = 1; index <= inputNumber; index++) {
//   arr.push(index);
// }
// result = arr.reduce(
//   (accumelator, currentValue) => accumelator * currentValue,
//   result
// );
// console.log(result);

////////////////////////////////
// Write a program that that will take a number and if the number is even, it will print sum of all
// number from 0 to that number and if the entered number is odd, it will print sum of all numbers from 1 to that number.
// Furthermore, if user enters a negative number, it should display some message e.g., negative numbers are not allowed

// const inputNumber = 15;
// let value = 1;
// const arr = [];

// if (inputNumber < 0) {
//   console.log("Error Please Enter Positive Value");
// } else if (inputNumber % 2 == 0) {
//   value = 0;
// }

// for (let index = value; index <= inputNumber; index++) {
//   console.log(index);
//   arr.push(index);
// }
// const result = arr.reduce(
//   (accumelator, currentValue) => accumelator + currentValue,
//   0
// );

// console.log(result);

////////////////////////////////
// Write a program that will show sum of even numbers and sum of odd numbers found in an array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function evenCheck(value) {
//   return value % 2 == 0 ? value : "";
// }
// function oddCheck(value) {
//   return value % 2 ? value : "";
// }
// function sum(values) {
//   const result = values.reduce(
//     (accumelator, currentValue) => accumelator + currentValue,
//     0
//   );
//   return result;
// }

// const evenValues = arr.filter((items) => items == evenCheck(items));
// const oddValues = arr.filter((items) => items == oddCheck(items));

// const evenValuesSum = sum(evenValues);
// const oddValuesSum = sum(oddValues);

// console.log("The sum of even values is " + evenValuesSum);
// console.log("The sum of odd values " + oddValuesSum);

////////////////////////////////
// Write a program that will display whether a number is a prime number or not
// function prime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   if (number <= 3) {
//     return true;
//   }
//   if (number % 2 === 0 || number % 3 === 0) {
//     return false;
//   }
//   for (let i = 5; i * i <= number; i += 6) {
//     if (number % i === 0 || number % (i + 2) === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// // Test the function
// const number = 9;
// if (prime(number)) {
//   console.log(`${number} is a prime number.`);
// } else {
//   console.log(`${number} is not a prime number.`);
// }

//////////////////////////////////
// Write a program to find the sum of the following series: 1+4+27+256+ ... n terms

// const inputNumber = 32;
// const arr = [];

// for (let index = 1; index <= inputNumber; index++) {
//   const result = Math.pow(index, index);
//   arr.push(result);
//   console.log(result);
// }
// console.log(arr);

// function sum(values) {
//   const result = values.reduce(
//     (accumelator, currentValue) => accumelator + currentValue,
//     0
//   );
//   return result;
// }
// const sumOFAll = sum(arr);
// console.log("Sum of All the values " + sumOFAll);

//////////////////////////////////
// Use nested loops to create a triangle of stars
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 5; j >= i; j--) {
//     row += "*";
//   }
//   console.log(row);
// }



