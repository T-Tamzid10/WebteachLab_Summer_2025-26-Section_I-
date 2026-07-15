function validateForm() {

    let firstNameValid = false;
    let lastNameValid = false;
    let studentIdValid = false;
    let emailValid = false;
    let creditCompletedValid = false;
    let departmentValid = false;

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let studentId = document.getElementById("studentId").value;
    let email = document.getElementById("email").value;
    let creditCompleted = document.getElementById("creditCompleted").value;
    let department = document.getElementById("department").value;

    if(!firstName){
        document.getElementById("firstNameError").innerHTML = "First name is required.";
        document.getElementById("a").innerHTML="*"
        document.getElementById("firstNameError").style.color = "red";

        
    }
    else{
        document.getElementById("firstNameError").innerHTML = "";
        document.getElementById("a").innerHTML=""
        firstNameValid = true;
    }

    if(!lastName){
        document.getElementById("lastNameError").innerHTML = "Last name is required.";
        document.getElementById("b").innerHTML="*"
        document.getElementById("lastNameError").style.color = "red";
        
    }
    else{
        document.getElementById("lastNameError").innerHTML = "";
        document.getElementById("b").innerHTML=""
        lastNameValid = true;
    }

    if(!studentId.includes("-")){
        document.getElementById("studentIdError").innerHTML = "Student ID must contain '-'.";
        document.getElementById("c").innerHTML="*"
        document.getElementById("studentIdError").style.color = "red";
        
    }
    else{
        document.getElementById("studentIdError").innerHTML = "";
        document.getElementById("c").innerHTML=""
        studentIdValid = true;
    }

    if(!email.includes("@student.aiub.edu")){
        document.getElementById("emailError").innerHTML = "Email must contain @student.aiub.edu";
        document.getElementById("d").innerHTML="*"
        document.getElementById("emailError").style.color = "red";
        
    }
    else{
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("d").innerHTML=""
        emailValid = true;
    }

    if(creditCompleted == "" || creditCompleted < 0 || creditCompleted >= 148){
        document.getElementById("creditCompletedError").innerHTML = "Credit must be between 0 and 147.";
        document.getElementById("e").innerHTML="*"
        document.getElementById("creditCompletedError").style.color = "red";
        
    }
    else{
        document.getElementById("creditCompletedError").innerHTML = "";
        document.getElementById("e").innerHTML=""
        creditCompletedValid = true;
    }

    if(department == ""){
        document.getElementById("departmentError").innerHTML = "Please select a department.";
        document.getElementById("f").innerHTML="*"
        document.getElementById("departmentError").style.color = "red";
        
    }
    else{
        document.getElementById("departmentError").innerHTML = "";
        document.getElementById("f").innerHTML=""
        departmentValid = true;
    }

    // Add student to the table
    let table = document.getElementById("studentTable");

    let row = table.insertRow(-1);

    if(firstNameValid && lastNameValid && studentIdValid && emailValid && creditCompletedValid && departmentValid){ 

    row.insertCell(0).innerHTML = firstName;
    row.insertCell(1).innerHTML = lastName;
    row.insertCell(2).innerHTML = studentId;
    row.insertCell(3).innerHTML = email;
    row.insertCell(4).innerHTML = creditCompleted;
    row.insertCell(5).innerHTML = department;
    }
    if(firstNameValid && lastNameValid && studentIdValid && emailValid && creditCompletedValid && departmentValid){
        alert("Student added successfully!");
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("email").value = "";
    document.getElementById("creditCompleted").value = "";
    document.getElementById("department").selectedIndex = 0;
    }

    return false; 
}