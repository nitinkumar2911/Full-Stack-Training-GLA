// console.log('My first Javascript file is connected!');
// console.log("Nitin")
// alert('Welcome to Javascript, ' + 'Nitin Kumar');

// const fullName = 'Nitin Kumar';
// fullName = "RAm"
// let age = 0;
// const isStudent = true;
// let favouriteColor ;
// const pet = null;
// console.log(`Name: ${fullName}, type: ${typeof fullName}`);
// console.log(`age: ${age}, type: ${typeof age}`);
// console.log(`isStudent: ${isStudent}, type: ${typeof isStudent}`);
// console.log(`favouriteColor: ${favouriteColor}, type: ${typeof favouriteColor}`);
// console.log(` pet: ${ pet}, type: ${typeof  pet}`);
// const num1 = 25;
// const num2 = 4;
// console.log(`Sum: ${num1 + num2}`);
// console.log(`Difference: ${num1 - num2}`);
// console.log(`Product: ${num1 * num2}`);
// console.log(`Quotient: ${num1 / num2}`);
// console.log(`Remainder: ${num1 % num2}`);
// console.log(`Power: ${num1 ** 2}`);
// console.log(num1 > num2); 
// console.log('5' === 5);
//  console.log(10/3);
//  let a =parseInt("100px");
//  console.log(a+50);


// const score = 82; 
// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else if (score >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }


// const dayNumber = 6;

// switch (dayNumber) {
//     case 1:

//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid day number");
// }



// const isWeekend = (dayNumber === 6 || dayNumber === 7) ? "Yes" : "No";

// console.log("Is it a weekend?", isWeekend);

// for(let i= 1; i<=30;i++){
//     if(i%3 === 0 && i%5 ===0){
//         console.log("FizzBuzz");
//     }else if(i%3 ===0){
//         console.log("Fizz");
//     }else if(i%5 ===0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }
// let i =1;
// while(i<=30){
//     if(i%3 === 0 && i%5 ===0){
//         console.log("FizzBuzz");
//     }else if(i%3 ===0){
//         console.log("Fizz");
//     }else if(i%5 ===0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
//     i++;

// }

// function add(a,b){
//     return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }
// const multiply = (a, b) => a * b;
// const divide = (a,b) =>{
//     if(b ===0){
//         return "cannot divide by zero0";

//     }
//     return a/b;

// }
// console.log(add(5, 3));
// console.log(multiply(4, 6));
// console.log(divide(5,2));

// const BMI = (w,h)=>{
//     return w/(h*h);
// }
// console.log(BMI(34,3.8));

// const students = [
// { name: 'Rahul', score: 85 },
// { name: 'Priya', score: 92 },
// { name: 'Amit', score: 58 },
// { name: 'Sneha', score: 73 },
// ];
// const names = students.map(s => s.name);
// console.log(names);
// const passed = students.filter(s => s.score >=60);
// console.log(passed);
// const average = students.reduce((sum, c)=>{
//   sum = sum+c.score;
//   return sum;
// },0)/students.length;
// console.log(average);
// const findName = students.find(s =>s.name === "Priya");
// console.log(findName);
// const namePassed = students.filter(s =>s.score>=60).map(s=>s.name);
// console.log(namePassed);

// const inventory = [
// { name: 'Phone', price: 15000, category: 'Electronics', stock: 10 },
// { name: 'Shirt', price: 800, category: 'Clothing', stock: 0 },
// { name: 'Laptop', price: 55000, category: 'Electronics', stock: 5 },
// { name: 'Shoes', price: 2000, category: 'Clothing', stock: 8 },
// ];
// inventory.forEach(function(products){
//     console.log(` ${products.name} - Rs${products.price}  (${products.stock}  in stock)`);
// })
// const electronics =inventory.filter(products => products.category === "Electronics");
// console.log(electronics);
// const total = inventory.map(pro => pro.price*pro.stock).reduce((sum, curr)=>{
//     return sum + curr;
// },0);
// console.log(total);

// const outOfStock = inventory.filter(products =>{
//     return products.stock === 0;
// }).forEach((pro)=>{
//     console.log(pro.name);
// })

// inventory.push({
//     name: "watch",
//     price: 800,
//     category: "accessories",
//     stock: 20
// })
// console.log(inventory);
// const disProduct = inventory.map(pro =>{
//     return {
//         ...pro,
//         price : pro.price*0.8,
//     }
// });
// console.log(disProduct);

// const greeting = document.querySelector('#greeting');
// const nameInput = document.querySelector('#nameInput');
// const colorBox = document.querySelector('#colorBox');
// const greetBtn = document.querySelector('#greetBtn');
// greetBtn.addEventListener('click', () => {
// const name = nameInput.value.trim() || 'Guest';
// greeting.textContent = `Hello, ${name}!`;
// colorBox.style.backgroundColor = 'teal';
// });
// const playground = document.querySelector('#playground');
// const keyInput = document.querySelector('#keyInput');
// const status = document.querySelector('#status');
// playground.addEventListener("mousemove",(e) =>{
//     status.textContent = `Mouse position: X: ${e.clientX}, Y: ${e.clientY}`;
// });
// keyInput.addEventListener('keyup', (e) =>{
//     console.log(`User typed: ${e.key}  (Total Value: ${e.target.value})`);
// });
// const form = document.querySelector("#regForm");
// const username = document.querySelector("#username");
// const usernameErr = document.querySelector("#usernameErr");
// form.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     const val = username.value.trim();
//     if(val.length < 4){
//         usernameErr.textContent = "Username must be at least four characters long";
//         username.style.borderColor = "red";
    // } else{
    //     usernameErr.textContent = "";
    //     username.style.borderColor = "green";
    //     alert("Form submitted successfully");
    // }
//});


// function createSecureAccount(ownerName){
//     let balance = 0;
//     return {
//         deposit: (amount) =>{
//             balance += amount;
//             console.log(`${ownerName} deposited Rs${amount}. Balance: Rs${balance}`);

//         },
//         getBalance: () => balance,
//     }
// }
// const myAccount = createSecureAccount('Rahul');
// myAccount.deposit(1000);
// myAccount.deposit(500);
// console.log(`Current Balance: Rs${myAccount.getBalance()}`);
// console.log(myAccount.balance);

// const defaultSettings = { theme: 'light', showSidebar: true, maxItems: 10 };
// const userSettings = { theme: 'dark', showSidebar: false };
// const finalSettings = { ...defaultSettings, ...userSettings };
// console.log(finalSettings);
// const { theme, maxItems } = finalSettings;
// console.log(`Active theme: ${theme}, Max Items: ${maxItems}`);
// function getMinMax(...numbers){
//     let min = numbers[0];
//     let max = numbers[0];
//     for(let i =0; i<numbers.length; i++){
//         if(numbers[i] <min){
//             min = numbers[i];
//         }
//         if(numbers[i] >max){
//             max = numbers[i];
//         }
//     }
//     return [min, max];
// }
// const [min, max] = getMinMax(25, 8, 15, 42, 3, 19);
// console.log("Minimum ", min);
// console.log("Maximum: ", max);
// const purchases = [
// { item: 'Keyboard', price: 1200, count: 2, inStock: true },
// { item: 'Mouse Pad', price: 300, count: 1, inStock: true },
// { item: 'Monitor', price: 12000, count: 1, inStock: false },
// { item: 'USB Hub', price: 600, count: 3, inStock: true },
// ];

// const cartTotal = purchases.filter(p =>p.inStock).map(p=> p.price*p.count).reduce((sum, current) => sum + current, 0);
// console.log(`Total payment required: Rs ${cartTotal}`);

// 
// function simulateFetchProduct(){
//     return new Promise((resolve) =>{

//         setTimeout(()=>{
//             resolve({id:101, title: 'Wireless Headphones', price: 2999});
//         },1500);


//  } );

// }
// async function showProductDetails() {
// console.log('Fetching product details...');
// const product = await simulateFetchProduct();
// console.log(`Product: ${product.title} costs Rs ${product.price}`);
// }
// showProductDetails();
const btn =document.querySelector('#fetchUserBtn');
const card = document.querySelector('#userCard');
const card1 = document.querySelector('#card1');
btn.addEventListener('click', async () =>{
    card.innerHTML = 'Loading user...';
    try{
        const res = await fetch('https://randomuser.me/api/');
        const data = await res.json();
        const user = data.results[0];
        const user1 = data.results[1];
        card.innerHTML = `<img src="${user.picture.medium}">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p>email: ${user.email}</p>
        `;
        // card1.innerHTML = `<img src="${user1.picture.medium}">
        // <h3>${user1.name.first} ${user1.name.last}</h3>
        // <p>email: ${user1.email}</p>`;
        
    }catch (err){
        card.innerHTML = 'Failed to load user.';
    }
});

