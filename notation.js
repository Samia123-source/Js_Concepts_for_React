//Dot VS Bracket Notation

const person = {
    name: 'Lal Nil Pori',
    profession: 'Doctor',
    Age: 39,
    address: 'Mirpur',
    25: "Summer",
    "son-name": 'Sunny'
}

//Dot Notation
// const prof1 = person.profession;
// console.log(prof1);
const prof2 = person["profession"];
// console.log(prof2);
// const season = person[25];
// console.log(season);
const son = person['son-name'];
console.log(son);