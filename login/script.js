
let detail=[];

function HandleSubmit(){
  
    fname  =   document.getElementById('first-name').value;
   lname   =  document.getElementById('last-name').value;
    email = document.getElementById('first-email').value;
    number = document.getElementById('last-mobile').value;
    password = document.getElementById('first-password').value;
    Cpassword = document.getElementById('last-confirm').value;
    image = document.getElementById('image').value;
    gender = document.querySelector("input[name='gender']:checked").value;

    date = document.getElementById("Dob").value;
       console.log(date)
    // const obj = {
    //     year:"numeric",
    //     month:"long",
    //     day:"numeric"
    // }

    //     time =  date.toLocaleString(undefined,obj)

    //     console.log(time)

      information = {
        fname:fname,
        lname:lname,
        email:email,
        number:number,
        image:image,
        gender:gender,
        date:date

     };
         


       let exist = detail.some(e => e.email == email)
       let mobileexist = detail.some(e => e.number == number)

        if(((fname.charCodeAt(0)>=97) && (fname.charCodeAt(0)<=122)) || ((lname.charCodeAt(0)>=97) && (lname.charCodeAt(0)<=122))){
            alert("first and last name are not in capital case ")
            console.log("small")
        }
        else if(exist){
            alert("email is already exist")
        }else if(mobileexist){
            alert("phone number is already exist")
        }
        else if(password!=Cpassword){
                   alert("please check the password")
        }
        else {
            
        //   detail.push(information)
        detail=[...detail,information]
        console.log(detail)
        
          
    

        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('first-email').value = '';
        document.getElementById('last-mobile').value = '';
        document.getElementById('first-password').value = '';
        document.getElementById('last-confirm').value = '';
        document.getElementById('first-city').value = '';
        document.getElementById('select').value = '';
        document.getElementById('image').value = '';
       
        }

}

