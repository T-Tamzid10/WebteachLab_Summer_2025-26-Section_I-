console.log("Connected");
function validation(){

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // First Name
    if(!firstName){
        document.getElementById("firstNameErr").innerHTML =
        "First name is required";
    }else{
        document.getElementById("firstNameErr").innerHTML = "";
    }

    // Last Name
    if(!lastName){
        document.getElementById("lastNameErr").innerHTML =
        "Last name is required";
    }else{
        document.getElementById("lastNameErr").innerHTML = "";
    }

    // Email
    if(!email){
        document.getElementById("emailErr").innerHTML =
        "Email is required";
    }else if(!email.includes("@")){
        document.getElementById("emailErr").innerHTML =
        "Enter valid email";
    }else{
        document.getElementById("emailErr").innerHTML = "";
    }

    // Phone Number
    if(!phone){
        document.getElementById("phoneErr").innerHTML =
        "Phone number is required";
    }else if(phone.length < 11){
        document.getElementById("phoneErr").innerHTML =
        "Phone number must be 11 digits";
    }else{
        document.getElementById("phoneErr").innerHTML = "";
    }

    return false;
}