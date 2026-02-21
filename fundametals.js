// How to declare a variable using let and const
// const - if we don't want to change a variable later
const fathername = 'Arnold'
let season = 'rainyy'
season = 'winter'
// 6 basic conditions : >, <, ===, !==, <=, >=
//  multiple conditions: &&, ||
 if (fathername === 'Arnold'|| season ==='rainy'){
console.log('Father name is Arnold or season is rainy');
 }

 else if(fathername === 'Arnold'){
    console.log('Father name is Arnold');
 }
 else{console.log('Father name is not Arnold and season is not rainy');

 }


    
//  3.Array declare
//  index
//  length
//  push
// const numbers = [89, 35, 98, 12]
// numbers [0]= 56;
// // 4.for loop
// for (let i=0; i<numbers.length;i++){
//     const number = numbers[i]
//     confirm(number);

// }

// // 5.function
// function multiply(num1,num2){
//     const result = num1*num2;
//     return result;
// }
// const output =multiply(35, 78);

// // 6. object
// const student = {
//     name: 'Robert',
//     age:32,
//     movies: ['Twilight', 'Harry Porter']
// }
// //  Access property by name (3ways)
// console.log(student.age); 
// // direct by property  
// const myVariable='Age'; 
// // Access via property name string 
// console.log(student[myVariable]); 
// // Access via property name in a variable

