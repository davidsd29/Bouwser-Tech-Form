import CheckRegister from './registerValidation.js'

const pageIndicators = document.querySelectorAll('.form_indicator span');
const form = document.getElementById("register_form"),
    register_FormField = document.querySelectorAll(".form-field");


if (form !== null) {
    form.addEventListener('submit', (e) => CheckRegister(e))

        register_FormField.forEach((field) => {
            let input = field.querySelector("input")
            input.removeAttribute("required")
    });
}

// if (pageIndicators !== null) {
//     pageIndicators.parentElement.classList.remove('hidden');
// }


// console.log(pageIndicators.parentElements)