function solve() {
	// 0 - encode and send, 1 - decode and read it
	let buttons = Array.from(document.getElementsByTagName('button'));
	let textareas = Array.from(document.getElementsByTagName('textarea'));
	
	buttons[0].addEventListener('click', function(e) {
		 let message = textareas[0].value.split('');
		 let result = "";

		message.forEach((c) => {
			let newChar = String.fromCharCode(c.charCodeAt(0) + 1);
			result += newChar;
		})

		 textareas[0].value = "";
		 textareas[1].value = result;
	});

	buttons[1].addEventListener('click', function(e) {
		let message = textareas[1].value.split('');
		let result = "";

		message.forEach((c) => {
			let newChar = String.fromCharCode(c.charCodeAt(0) - 1);
			result += newChar;
		})

		textareas[1].value = result;
   });
}