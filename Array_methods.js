const product = [{name: 'laptop', price: 3200, brand:'lenevo', color:'Silver'},
    {name: 'Phone', price:7000, brand:'iphone', color: 'golden'},
    {name:'watch', price: 3000, brand:'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand:'ribon', color:'black'}
];
//  const brands = product.map(product => product.brand);
//  console.log(brands);
//  const prices = product.map (product => product.price)
//  console.log(prices);
//  product.forEach(product => console.log (product))
//  product.forEach(product =>{

//  })

 //filter

// const cheap = product.filter(product => product.price<=5000);
// console.log(cheap);
// const SpecificName = product.filter(product => product.name.includes('n'));
// console.log(SpecificName);
// 4.find
const special= product.find(p => p.name.includes('n'));
console.log(special);







