const RandomOrg = require('random-org');

const ApiUrl = 'https://api.random.org/json-rpc/1/invoke'; // 
const ApiKey = '6da2601a-2ecd-4e61-a7fd-9298cf662317';

let mainForm = document.querySelector('#main-form');
let mainInput1 = document.querySelector('#main-input');
let mainInput2 = document.querySelector('.input--minNumber');
let mainInput3 = document.querySelector('.input--maxNumber');
let submitButton = document.querySelector('.main-form__button--submit');
let resetButton = document.querySelector('.main-form__button--reset');

mainForm.addEventListener('submit', (e) => {
	
	let number = mainInput1.value;
	let minNumber = mainInput2.value;
	let maxNumber = mainInput3.value;

	let random = new RandomOrg({ apiKey: ApiKey });
	
	e.preventDefault();

	random.generateIntegers({ 
		n: number,
		min: minNumber, 
		max: maxNumber,
	}).then((result) => {
	    let randomNumbers = result.random.data;
	    let target = document.querySelector('#target');
	    target.innerHTML = 'Your random numbers are: ' + randomNumbers;
    });
});

resetButton.addEventListener('click', () => {
	mainInput1.value = '';
	mainInput2.value = '';
	mainInput3.value = '';
	target.innerHTML = '';
});