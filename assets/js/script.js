import CheckRegister from './registerValidation.js'


const popup = document.getElementById('resume')
const enquete = {
    start: document.getElementById('start'),
    end: document.getElementById('end'),
}


const register_form = document.getElementById("register_form"),
    register_FormField = document.querySelectorAll(".form-field");


if (register_form !== null) {
    register_form.addEventListener('submit', (e) => CheckRegister(e))

        register_FormField.forEach((field) => {
            let input = field.querySelector("input");
            input.removeAttribute("required");
    });
}

if (enquete.start !== null) {
    enquete.start.addEventListener('click', () => {
        localStorage.setItem('enquete', 'started')
    }); 
}

if (enquete.end !== null) {
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