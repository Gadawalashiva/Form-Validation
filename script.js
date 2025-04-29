const form=document.getElementById("Formcontainer");

    form.addEventListener("submit",function(event){
        event.preventDefault();
    

        const Email=document.getElementById("email").value.trim();
        const fname=document.getElementById("fname").value.trim();
        const lname=document.getElementById("lname").value.trim();
        const Number=document.getElementById("Number").value.trim();
        const password=document.getElementById("password").value.trim();

        if(!isvalidEmail(Email)){
            alert("Enter valid email mawa brooo");
            return;
        }

        if(!isValidNumber(Number)){
            alert("Enter a valid  number mawaaa  pakka 10 numbers undali kada");
            return;
        }

        if(!isValidpassword(password)){
            alert("Enter a valid password  mawa pakka 8 characters undali");
            return;
        }
        console.log("All Valid Inputs ✅");
  console.log(fname, lname, Number, Email, password);
  alert("Form submitted successfully! 🎉");

   form.reset();

    })

    function isvalidEmail(email){
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function isValidNumber(Number){
        const pattern = /^\d{10}$/;
        return pattern.test(Number)
    }

    function isValidpassword(password){
        return password.length>=8;
    }

//     function isStrongPassword(password) {
//   const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//   return pattern.test(password);
// }

