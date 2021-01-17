const createUser = async () => {
    const fullName = document.getElementById("fullname")
    const Address = document.getElementById("address")
    const Age = document.getElementById("age")
    const phoneNumber = document.getElementById("number")
    const Email = document.getElementById("emailRegistration")
    const Password = document.getElementById("passwordRegistration")

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            responseType: "json",
        },
        body: JSON.stringify({
            fullName: fullName.value,
            Address: Address.value,
            Age: Age.value,
            phoneNumber: phoneNumber.value,
            Email: Email.value,
            Password: Password.value,
        })
    }
    
    const response = await fetch("https://chefsiaryserver.herokuapp.com/api/user/register", options);
    const resData = await response.json();
    console.log(resData);
    if(response.status === 200){
        alert("Registered");
        window.location.replace('./login.html');
    }else{
        alert(resData.message);
    }
    };
const registerForm = document.getElementById("registrationform");
registerForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    createUser();
    
})