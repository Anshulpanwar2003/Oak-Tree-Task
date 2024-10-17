//string questions 

//1)

// function vowel(str){
//      let ans="";
//     for(let i=0; i<str.length; i++){
//      if((str.charAt(i)==='a' || str.charAt(i)==='i'||str.charAt(i)==='e' ||str.charAt(i)==='o' ||str.charAt(i)==='u') || (str.charAt(i)==='A' || str.charAt(i)==='I'||str.charAt(i)==='E' ||str.charAt(i)==='O' ||str.charAt(i)==='U')  ){
        
//      }else
//       ans = ans+str.charAt(i);
//     }
//     console.log(ans)
// }


//  str = "Anshl"
// vowel(str)

//2)palindrome

// function palindrome(str){
//     i=0;
//      j=str.length-1;
//      while(i<j){
//         if(str.charAt(i)!=str.charAt(j)){
//             console.log("not palindrome")
//             break;
//         }
//         i++;
//         j--;
//      }

// }

// palindrome("mom")

//3)occurence

// function occurence(str){
//   let result = {}
//   for(let i =0; i<str.length; i++ )
//   {   let ex = str.charAt(i)
//     if(!result[ex]){
//         result[ex]=1;
//     }
//     else {
//         result[ex]= result[ex]+1
//     }
//   }


//   console.log(result)


// }

//   let str = "happy"

// occurence(str)

// for(let i =0; i<str.length; i++){
//        let result= str.indexOf(str.charAt(i))
//       console.log(result) 
// }



//4) substring 
      
// const temp=[]
    
//       function substring(str1){
//                 for(i=0; i<str1.length; i++){
//                     for(let j=i; j<str1.length; j++){
                      
//                       r =  str1.substring(i,j+1)
//                         temp.push(r)

//                     }
//                 }
              
//                 for(i=0; i<temp.length; i++){
//                        console.log(str1.indexOf(temp[i]))
//                         }
                       
//               }
      
//        let str1 = "happy"

//      substring(str1)
//      console.log(temp)

//5) anagram
   
//    function anagram(str,str1){

//      let a=   str.split("")
//      let b=   str1.split("")
//         a.sort()
//         b.sort()
//         // console.log(a)
//         // console.log(b)
        
//        for(let i =0; i<str.length; i++){
//                 if(a[i]==b[i]){

//                 }
//                 else{
//                     console.log("it is not an anagram")
//                 }
//        }
     

//    }


//    anagram("ans","nksa")


// 1) Array programs

// function duplicate(arr){
//     let set = new Set();
//     for(let i =0; i<arr.length; i++){
//                 set.add(arr[i]);
//     }

//     console.log(set)
   
// }
// duplicate([1,2,3,1,2])

//2)nested array

    //   function nested(arr){
    //          arr.flat()
    //          console.log(arr)
    //   }    


    //   nested([[1,2,3],[2,3,4]])

    //3)maximum value

    //    function max(arr){
    //        let max=arr[0]
    //     for(let i =0; i<arr.length; i++){
    //            if(arr[i]>max){
    //             max = arr[i];
    //            }
    //     }
    //           console.log(max)
    //    }
    //    max([1,9,2,11,0])

//4)given number of steps rotate

// function rotate(arr,steps){
    
//     function left(start,end,arr){
//             for(let i=start; i<end; i++){
//                 if(arr[i]<arr[i+1]){
//                     temp = arr[i];
//                     arr[i]=arr[i+1]
//                     arr[i+1] = temp;
//                 }
//             }

//     }
//     function right(start,end,arr){
//         for(let i=start; i<end; i++){
//             if(arr[i]<arr[i+1]){
//                 temp = arr[i];
//                 arr[i]=arr[i+1]
//                 arr[i+1] = temp;
//             }
//         }
//     }
//     function all(start,end,arr){
//         for(let i=start; i<end; i++){
//             if(arr[i]<arr[i+1]){
//                 temp = arr[i];
//                 arr[i]=arr[i+1]
//                 arr[i+1] = temp;
//             }
//         }
//     }   
//     left(0,2,arr)
//     right(2,arr.length-1,arr)
//     all(0,arr.length,arr)
  

//     console.log(arr)

// }

// rotate([1,2,3,4,5],2)

//5)

// console.log("jubiubiu")
 
// function two(arr,arr1){
//     let result =[]
   

//     for(let i =0; i<arr.length; i++){
//        for(let j=0; j<arr.length; j++){
//            if(arr[i]===arr1[j]){
//             result.push(arr[i])
//            }
//        }
//     }
//     console.log(result)

// }

// two([1,2,3],[2,0,1]);

//loops

//1)

// function fibo(n){
//      first=0;
//      second=1;
//      console.log(first)
//      console.log(second)
//      for(let i=1; i<n; i++)
//      {      r=second+first; 
//              console.log(r)//1
//              first=second; //f=1
//             second=r


//      }


// }

// fibo(7)

//2)fact

// function fact(n){
//    let  factorial=1;
//     for(let i=1; i<=n; i++){
//         factorial = factorial*i
//     }
//     console.log(factorial)

// }
// fact(5)

//3) sum of array

// function sum(arr){
        
//     let sum=0;
//     for(let i=0; i<arr.length; i++)
// {      
//     sum=sum+arr[i]

// }
// console.log(sum)
// }

// sum([1,2,3,4])

//4)prime number

// function prime(n){
//      if(n==0 && n==1){
//         console.log("it is not prime number")
//      }
//      for(let i=2; i<n; i++){
//           if(i%2==0){
//             console.log("it is not prime number"+i)
//           }
//           else{
//             console.log("prime number"+i)
//           }
//      }
// }

// prime(5)

//5)reverse an array

// function reverse(arr){
//     i=0; j=arr.length-1;
//     while(i<j){
//         temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         i++; 
//         j--;
//     }
//     console.log(arr)

// }
// reverse([1,2,3,4,5])

//------------------------------object0--------------------------

//) deep clone
   //1)
//   function deep(obj){
            
//     temp = JSON.parse(JSON.stringify(obj))
//     console.log(temp)
        

//   }
//   deep({name:"anshul",lastname:"panwar",age:"21"})

//2)merge two objects

// function merge(obj,obj1){

//    console.log( Object.assign(obj,obj1))
//    console.log(obj)
//    console.log(obj1)


// }

// merge({name:"anshul",lastname:"panwar",age:"21"},{name:"shivendra",lastname:"singh",city:"indore"})

//3)keys in object

// function count(obj){
//    console.log(Object.keys(obj).length)

// }
// count({name:"anshul",lastname:"panwar",age:"21"})

//4)Key value swapped 

// function swapped(obj){
//      result = {}
//      for(let key in obj){
//         result[obj[key]] = key;
//      }
//      console.log(JSON.stringify(result))
// }
// swapped({name:"anshul",lastname:"panwar",age:"21"})

//5)flatting of object
     
// const detail = {
//       name:"anshul",
//       age : "21",
//       address:{
//         city:"indore",
//         state:"mp"
//       },
//       pin:"452001"

//    }

//      let result ={}
//    function flatdata(detail){
//       for(let keys in detail){
//             if(typeof detail[keys]=="object"){
//                 flatdata(detail[keys])
//             }
//             else{
//                 result[keys]=detail[keys]
//             }
//       }
//    }
//    flatdata(detail)
//   console.log(result)
//------------------------functions---------------------------------//

// 1)memoization

   // function memoization(func){
   //         const cache={};
   //         return function(...args){
   //           const key = JSON.stringify(args)
   //           if(cache[key]){
   //             console.log("data is feching from the cache")
   //             return cache[key]
   //           }
   //           console.log("data is new")
   //             let result = func.apply(this,args)
   //             cache[key]= result
   //             return result;
   //         }
         
   // }
   

   //  function square(x){
   //          return x*x;
   //  }
   
   //  const memo = memoization(square)
   //  console.log(memo(5))
   //  console.log(memo(6))




//2)curring


//    function curry(a){
//         return function (b) {
//            return function(c){
//                   return a+b+c;
//            }
//         }
//    }

//    console.log(curry(4)(1)(5))

//3)Compostion of the function

   // function add(a,b){
   //    return a+b;
   // }
    
   // function mult(a,b){
   //    return a*b;
   // }
   
   //  const compose = (f1,f2) => (a,b) => f2(f1(a,b),b)

   //  const result = compose(add,mult)
 
   // t =  result(2,4)
   // console.log(t)
  

//  4) Debousing in js

   //     function Debounce(func, delay){
   //            let timeout;

   //            return function(...args){
   //             clearTimeout(timeout)
   //           timeout =  setTimeout(()=>{
   //               func(...args)
                 
   //           },delay)
   //          }
   //     }
      
   //     function myfunction(){
   //       console.log("printing")
   //     }


   //  document.getElementById("test").addEventListener("input",Debounce(myfunction,500))

   // 5) throttle function
       
      //  function throttle(func,delay){
      //       let lastCall=0;
      //       return function(...args){
      //           const now = new Date().getTime();
                 
      //           if(now-lastCall<delay)
      //             return;

      //           lastCall=now;
      //           func(...args)
                   
      //       }
      //  }

      // function myfunction(){
      //     console.log("heki jbi")
      // }
      

      //  document.getElementById("button").addEventListener("click",throttle(myfunction,500))

    


// //Problem of the day 

// let arr = [
//    {
//     key:"1.0",
//     children:[
//         {
//             keys:"1.1",
//             children:[{
//              keys:"1.2",
//              children:[{
//                 keys:"1.3"
//              }]
//             }]
//         }
//     ]
//    },
//    {
//     key:"2.0",
//     children:[
//         {
//             keys:"2.1",
//             children:[{
//              keys:"2.2",
//              children:[{
//                 keys:"2.3"
//              }]
//             }]
//         }
//     ]
//    }


// ]

//    let flag=0;

   
  
//      let temp =[1.0,1.1]
//      let result =[]
//    function flatdata(detail){


   
//       for(let keys in detail){

//         if(flag==1){
//             break;
//          } 
        

//             if(typeof detail[keys]=="object"){
               
              
//                for (let [variable,value] of Object.entries(detail[keys])) {
//                   if(flag==1){
//                     break;
//                       }
//                 if (Array.isArray(value)) {
                    
//                 }  else if (typeof value == "object") {
                    
//                     // flatdata([value]); 
//                   }
                
//                 else if(value == "1.3") {
//                     flag=1;

//                     console.log("got the value",value)
                    
//                     break;
//                 }
//                  else { 
//                     result.push(value.toString())
//                      }
                           
//                    } 
//                    if(flag!=1){
//                     flatdata(detail[keys])

//                  }

//             }

           
            
           
//       }
//    }


//    flatdata(arr)
//    console.log(result)

//question switch case


//    function fun(number){
     
//       while(number<4){
        
//          switch(number){
//             case 1 :  {count= number+1;
//               return count;
//               break;
//             }

//               case 2 : {count = number+1;
//               return count;
//               break;
//               }

//               case 3 : { count=number+1;
//               return count;
//               break;
//               }

//               case 4 :  {count=number+1;
//               return count;
//               break;
//               }
//          }

//       }

//    }

//  console.log(fun(2))  

//duplicate in array 

// const arr = [1,2,3,1]
// const result=[]

// for(let i=0; i<arr.length; i++){
      
//        if(!result.includes(arr[i])){
//          result.push(arr[i])
//        }
        

        
// }


// console.log(result)

//sorting


// arr = [11,66,50,606]

// // for(let i=0; i<arr.length; i++){

// //    for(let j=i+1; j<arr.length; j++){
// //             if(arr[i]>arr[j]){
// //                temp = arr[i]
// //                arr[i]=arr[j]
// //                arr[j]=temp;
// //             }
           
// //    }
// // }
// arr.sort(function(a,b){
//      return a-b;
// });


// console.log(arr)

//4)flat method in js

//   function nested(arr){
//             arr.flat()
//             console.log(arr)
//      }    


//      nested([[1,2,3],[2,3,4],[7,8,9]])
