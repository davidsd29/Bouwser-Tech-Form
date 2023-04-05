import CheckRegister from './registerValidation.js'
import CheckAnswers from './radioValidation.js'


const popup = document.getElementById('resume')
const enquete = {
    start: document.getElementById('start'),
    end: document.getElementById('end'),
}

const form = {
        question_FormField: document.querySelectorAll('.questions .required_question'),
    	qestions_Submit: document.querySelector('.questions #submit_btn'),
        register: document.getElementById("register_form"),
        register_FormField: document.querySelectorAll(".form-field")
}

if (form.qestions_Submit) {
    form.qestions_Submit.addEventListener('click', (e) => CheckAnswers(e))

     form.question_FormField.forEach((field) => {
            let input = field.querySelectorAll("input");
            input.forEach((input) =>  input.removeAttribute("required"))
    });
}


if (form.register) {
    form.register.addEventListener('submit', (e) => CheckRegister(e))

        form.register_FormField.forEach((field) => {
            let input = field.querySelector("input");
            input.removeAttribute("required");
    });
}

if (enquete.start) {
    enquete.start.addEventListener('click', () => {
        localStorage.setItem('enquete', 'started')
    }); 
}

if (enquete.end) {
    enquete.end.addEventListener('click', () => localStorage.clear()); 
}


window.addEventListener('load', () => {
    const enquete = localStorage.getItem('enquete') || '';

    if (enquete == 'started' && window.location.pathname == '/' && popup !== null){
        popup.classList.add('open');
        
        setTimeout(() => {
            popup.classList.remove('open');
        }, 5000);
    }
});