const nums = [10, 20, 30, 40, 50];
    let total = 0;
    nums.forEach((ele ,index ) => {
       total += ele
    }); 
    console.log(total);




const nums_2=[1, 2, 3, 4, 5];
const newNums = nums_2.map((nums_2) =>(nums_2 * 2))
console.log(newNums);


const users = [
  { id: 1, name: "Ahmed", age: 22 },
  { id: 2, name: "Mona", age: 25 },
   { id: 3, name: "Ali", age: 20 } ];
const newUsers = users.map((users)=>(users.name))
console.log(newUsers);


const num_3 = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNum = num_3.filter((num_3) =>(num_3 % 2 === 0))
console.log(evenNum);

        
const users_2 = [
   { name: "Ahmed", age: 17 },
   { name: "Mona", age: 22 },
   { name: "Ali", age: 15 },
   { name: "Sara", age: 30 }
 ];

 const newUsers_2 = users_2.filter((users_2) =>( users_2.age > 18))
console.log(newUsers_2);

 const products = [
   { id: 1, name: "Laptop", price: 30000 },
   { id: 2, name: "Phone", price: 15000 },
   { id: 3, name: "Tablet", price: 10000 }
 ];
 const newProd = products.find((products) => (products.name === "Phone"))
 console.log(newProd);


 const products_2 = [
   { name: "Laptop", stock: 0 },
   { name: "Phone", stock: 0 },
   { name: "Tablet", stock: 5 }
];
const newProducts = products_2.some((products_2) => (products_2.stock > 0))
 console.log(newProducts);


 
 const cart = [
  { name: "Laptop", price: 30000 },
  { name: "Phone", price: 15000 },
  { name: "Tablet", price: 10000 }
];

const totalPrice = cart.reduce((total, product) => total + product.price, 0);

console.log(totalPrice); 
