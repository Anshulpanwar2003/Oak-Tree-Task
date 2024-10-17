//2)

// a = prompt("enter the first number ")
//         b= prompt("enter the second number ")

//         if(a>0 && b>0){
//             document.write("both are positive")
//         }
//         else if (a>0 && b<0){
//             document.write("first number is postive and second number is negative")
//         }
//         else if (b>0 && a<0){
//             document.write("second number is postive and first number is negative ")
//         }else 
//         document.write("both are negative")


//py 

// function py(){
   
//     let a = prompt("enter the string ")
    
//       if(a.charAt(0)=="p" && a.charAt(1)=="y"){
//         return a;
//       }
//       else {
//         return "py"+a;
//       }
  


// }
// result = py();
// console.log(result)


//4) Remove the element from the given specific place

// function replace(){
// let str = prompt("enter the string")
//   let temp =""
//   let postion = prompt("enter the postion");
// for (let i =0; i<str.length; i++){
//       if(postion==i)
//       {
//         continue;
//       }
//       temp = temp+str.charAt(i)
// }
// return temp
// }
// document.write(replace())

//5) multiple of 3 and 7

//   let number = prompt("enter the number")

//      if(number%3==0 && number%7==0){
//         document.write("give number is the multiple of both ")
//      }
//      else {
//         document.write("give number is not the multiple of both ")
//      }

//6) start with java


// function check(){
// let str =prompt("ente the string")
//     let temp = str.substring(0,4)
//     console.log(temp)
//    if(temp == "java"){
//     document.write("true")
//    }
//    document.write("false")
// }
// check()

//7)nearest to 100

// function nearest(){
    
//     first = prompt("enter the first number")
//     second = prompt("enter the second number")
    
//        if(first>second && first<100)
//        {
//         document.write(first,"is nearest")
//        }
  
// }

// nearest()

//8) two positve number
//  number = prompt("enter  the first number")
//  numbersec = prompt("enter  the second number")

//  if(number>60 || numbersec>60 || number<40 || numbersec <40){
//     document.write("number is not in the range of 40 and 60")
//  }
//   else {
//       if(number >numbersec)
//        {
//         document.write(number,"is larger")
//        }
//        else{
//         document.write(numbersec,"is larger")
//        }
   

//   }


//9) last digit is same

// first = prompt("enter the first number")
// second = prompt("enter the second number")
// third = prompt("enter the third number")

// flast=first%10
// slast=second%10
// tlast=third%10

// if(flast==slast && slast==tlast && flast==tlast){
//     document.write(flast,"last digit is same")
// }else {
//     document.write("last digit is different")
// }

//10)

// a = prompt("enter first")

// b = prompt("enter second")

// sub=a-b
// sub2=b-a
// c=a+b

// if(a==8 || b==8 || sub==8 || sub2==8){
//     document.write("the givin number satisfied the all conditon")
// }
// else if(c==8){
//     document.write("satisfied")
// }
// else{
//     document.write("not satisfied")
// }
