function solve() {
	let sections = document.querySelectorAll('div[id="exercise"] section');
	console.log(sections);

	let answers = ['2013', 'Pesho', 'Nakov'];
	let correctAnswers = 0;

	let buttons = Array.from(document.getElementsByTagName('button'));

	buttons.forEach(currentButton => {
		currentButton.addEventListener('click', (e) => {
			let input = e.target.parentNode.querySelector('input[type="radio"]:checked').value;
			let result = "";

			checkIfCorrect(input);

			if (currentButton.textContent === 'Get the results') {
				if (correctAnswers == answers.length) {
					result = "You are recognized as top SoftUni fan!";
				}
				else {
					result = `You have ${correctAnswers} right answers.`
				}
			}
			else {
				if (input) {
					let nextSection = e.target.parentNode.nextElementSibling;
					nextSection.style.display = 'block';
				}
			}

			let resultDiv = document.getElementById('result');
			resultDiv.textContent = result;
		});
	});

	function checkIfCorrect(input) {
		if (answers.includes(input)) {
			correctAnswers++;
		}
		return correctAnswers;
	}
}