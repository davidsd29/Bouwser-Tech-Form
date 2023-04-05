const questions = {
	form: document.querySelector('form'),
	formFields: document.querySelectorAll('.required_question'),
};

let validInput = false;

function CheckAnswers(event) {
	event.preventDefault();

	//Looping through the whole form
	questions.formFields.forEach((field) => {
		let input = field.querySelectorAll('input'),
			required = field.querySelector('span');
		errorResponse(input, required);
	});

	if (validInput) {
		console.log('Form is valid');
		questions.form.submit();
	} else {
		console.log('Form is not valid');
	}
}

function errorResponse(input, required) {
	for (const radioButton of input) {

		if (radioButton.checked) {
			validInput = true;
			if (!required.classList.contains('hidden'))
				required.classList.add('hidden');

			break;
		} else {
			validInput = false;
            console.log()
			required.classList.remove('hidden');
		}
	}
}

export default CheckAnswers;
