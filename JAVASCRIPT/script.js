// for(i = 1; i<=10; i++){
//     console.log(i);
//     console.log("hello world");
// }
// i =1
// while(i<=10){
//     console.log('A' +i);
//     i++;
// }
// i =1
// do{
//     console.log("Hello World");
//     i++;
// }while(i<=5);



// let students = ["Nitin", "Ram", "Rahul", "Krishna"];
// for(i = 0; i<students.length; i++){
//     console.log(students[i]);
  
   
// }
//   students[1] = "xyz";
//  console.log(students);
//  students.push("Anjali");
//  console.log(students);
//  students.unshift("Anamika");
//  console.log(students);
//  students.pop()
//  console.log(students);
//  students.shift();
//  console.log(students);
//  let numbers = [1,2,3,4,5,6,7,8,9];
//  for(let i = 0; i<numbers.length; i++){
//     if(numbers[i]%2 ===0){
//         continue;
//         console.log(`${numbers[i]} is a even number`);
        

//     }else{
//         console.log(`${numbers[i]} is an odd number`);
//     }
//  }
//  for(let number of numbers){
//      if(number%2 ===0){
//         console.log(`${number} is a even number`);
//         break;

//     }else{
//         console.log(`${number} is an odd number`);
//     }

//  }
//  for(let i in numbers){
//     console.log(i);
//  }
function checkEvenOdd(n){
    if(n%2 ==0){
        return "Even number";
    }else{
        return "Odd number";
    }
}

console.log(checkEvenOdd(4))
function sum(a, b){
    return a+b;
}
console.log(sum(40, 60));

const greet  = function(name){
    console.log("hello "+ name)
};
greet("Nitin");


const square = (num) => num*num;
console.log(square(5));