// 1. JSON => stringify, parse

// const student = {
//     name:'Robert',
//     age: 32,
//     movie: ['Twilight', 'Harry Porter']

// }
// const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

// // to convert JSON to object
// const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2.Fetch
fetch('url')
.then(res => res.json())
.then(data => console.log(data));

//keys, values
const keys = Object.keys(student);
const values = Object.values(student);

//for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num*2);

// for of on array like Object
// loop on an object using for in

//add or remove from an array

const product = [{name: 'laptop', price: 3200, brand:'len', color:'Silver'},
    {name: 'Phone', price:7000, brand:'HTC', color: 'golden'},
    {name:'watch', price: 3000, brand:'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand:'ribon', color:'black'}
];
const newProducts = {name:'webcam', price:700, brand:'LAL'};

//copy products array and then add new product
const newProduct = [...products, newProduct];
//create a new array without one specific item.
//remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
