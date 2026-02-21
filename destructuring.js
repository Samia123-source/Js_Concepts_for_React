const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

// const[x, y] = [42, 65];
// console.log(x, y);

// const [x, y]= numbers;
// function boxify (num1, num2){
//     const nums = [num1, num2];
//     return nums;
// }
// console.log(boxify(90,34));

const student ={
    name: 'Robert',
    age: 32,
    movies:['Water for elephant', 'Harry Poter']
}
const [firstMovie, SecondMovie] = student.movies;

//object destructuring
// const {name, age} = {name:'Alu', age = 12};
// const {name, age} = {id:12, name:'Alu', salary:3400, age: 14};
const employee ={
    ide:'VS code',
    designation: 'developer',
    machine:'MAC',
    language: ['html','CSS','js'],
Specification:{
    height: 66,
    weight: 67,
    address: 'Cumilla',
    drink: 'Water',
    Watch: {color:'block',
        price: 500,
        brand: 'garmin'
    }
}
}
const {machine, ide} = employee;
// const{weight, address}= employee.Specification;
const[brand]= employee?.Specification?.Watch;