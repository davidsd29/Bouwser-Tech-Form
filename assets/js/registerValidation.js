const registerForm = {
    form: document.getElementById('register_form'),
    formFields: document.querySelectorAll(".form-field"),
    name: document.getElementById("first_name"),
    student_nmbr: document.getElementById("student_nmbr"),
    email: document.getElementById("email"),
    submit: document.querySelector("#register_form sumbit")
}

const popup = document.getElementById('complete')

const data = {}
let validRegistration = false;
let errorMessage;
let emailErrorMessage;


function CheckRegister(event) {
    event.preventDefault();

    //Looping through the whole form 
    registerForm.formFields.forEach((field) => {
            let input = field.querySelector("input"),
            name = input.name, //name of the input type
            value = input.value;

            errorResponse(name, value, field)

        data[name] = value
    });

    if (validRegistration) {
        popup.classList.add('open');
        localStorage.clear();
        
        setTimeout(() => {
            popup.classList.remove('open');
            registerForm.form.submit();
            window.location.href = '/';
        }, 2000);

    } else {
        console.log("registration is not valid");
    }
}
 

function ValidateEmail(input) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(input === "") return
    if (input.match(validRegex)) {  
        return true;
    } else {
        emailErrorMessage = "E-mail is incorrect, kijk even als alles klopt";
        return false;
    }
}


function errorResponse(inputName, inputValue, required) {

    switch (inputName) { // Check which part of the hash we're dealing with
        case "first_name":
            if (inputValue === "") {
                validRegistration = false;
                required.classList.add("invalid");
                let message = GetErrorMessage("first_name");
                document.getElementsByName('first_name')[0].placeholder = message;

            } else {
                required.classList.remove("invalid");
            }
            break;

        case "email":
            let validEmail = ValidateEmail(inputValue);
            let errorEmailInput = document.querySelector('.form-field span');
            
            if (inputValue === "" || (!validEmail)) {

                let message = GetErrorMessage("email");

                validRegistration = false;
                required.classList.add("invalid");

                if (inputValue === "") {
                    document.getElementsByName('email')[0].placeholder = message;
                }

                if (!validEmail) {
                    errorEmailInput.classList.remove('hidden');
                    errorEmailInput.textContent = emailErrorMessage;
                } 

            } else {
                required.classList.remove("invalid");
                errorEmailInput.style.display = "none";
            }
            break;

        case "student_nmbr":
            if (inputValue === "") {
                validRegistration = false;
                required.classList.add("invalid");
                let message = GetErrorMessage("student_nmbr");
                document.getElementsByName('student_nmbr')[0].placeholder = message;
                
            } else {
                required.classList.remove("invalid");
            }
            break;

        default:
            validRegistration = true;
    }
}


function GetErrorMessage(key){
    switch(key) {
        case 'first_name':
            errorMessage = 'Invoer van voornaam is vereist';
            break;  
        case 'student_nmbr':
            errorMessage = 'Invoer van studenten nummer is vereist';
            break;
        case 'email':
            errorMessage = 'Invoer van email is vereist';
            break;

        default:
            errorMessage = "";         
    }
    return errorMessage; // The value of the array is been send back in to the errorMessage variable
}

export default CheckRegister;