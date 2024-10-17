// // first program of string

// let a ="a,nsh,ul"
// console.log(a.length)

// //replace
// console.log(a.replace("a","p"))

// //charat
// console.log(a.charAt(2))

// //slice
// console.log(a.slice(1,4))

// // susbstring

// console.log(a.substring(1,4))

// console.log(a.substring(-4)) //output last se 4 digit baad k element de dega

// //uppercase and lowercase

// console.log(a.toUpperCase())

// console.log(a.toLowerCase())

// //split

// console.log(a.split(","))

// //-------------------------------------------------Object Methods------------------------------------------------------------------//

// //assign

// let obj = {
//   name:"anshul",
//   lastname:"panwar",
//   age:21,
//   city:"indore"

// }

// let obj2 = {
//     name:"darbar",
//     lastname:"boss"
// }

// console.log(Object.assign(obj,obj2))

// //values method 

// console.log(Object.keys(obj))
// //values method 

// console.log(Object.values(obj))

// //entries

// console.log(Object.entries(obj))

// //object create 

// console.log(Object.create(obj))

// //array methods

// const arr = ["hello","hi","bye","goodluck"];

// const arr1 =["hue"]
// console.log(arr.length)

// //push

// console.log(arr.push("ji"))

// //pop

// arr.pop();

// //unshift

// arr.unshift("nice")

// //shift

// arr.shift();

// //at

// arr.at(1)

// //concate

// arr.concat(arr,arr1)

// //join

// console.log(arr.join())

// //slice 
// console.log(arr.slice(2))
// console.log(arr.slice(1,3))

  // DoM click event 
   
// var  a = document.querySelector("input");
// body =  document.querySelector("body")



// //mouseover

// a.addEventListener("mouseover",()=>{
//        a.style.scale = 2;
// })

// //mouseleave

// a.addEventListener("mouseleave",()=>{
//        a.style.scale = 1;
// })

// //mousemove

// a.addEventListener("mousemove",()=>{
//       var    count = count++;
//         console.log(count)
// })

// //onload event 

// body.addEventListener("onload",()=>{
//          alert("loading done")
//          console.log("hekki")
// })



// //mousedown


// a.addEventListener("mousedown",()=>{
//     console.log("jni")
// })


// //mouseup

// a.addEventListener("mouseup",()=>{
//     alert("hey")
//     a.style.backgroundColor="pink"
// })


// //click event 



// a.addEventListener("click",function(){
//      a.style.backgroundColor="black"
    
// })


//------------------------------------Date property-----------------------------------------------//

// let date = new Date();
  
//   const obj = {
//     year:"numeric",
//     month:"long",
//     day:"numeric"
//   }

// console.log(date.toLocaleString(undefined,obj));

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());