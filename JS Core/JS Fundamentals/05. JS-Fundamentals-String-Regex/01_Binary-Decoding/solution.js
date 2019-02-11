function solve() {
  let inputValue = document.getElementById('str').value;
  let sum = 0;

  //calculate weight
  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue[i] === '1') {
      sum++;
    }
  }

  let weight = sum % 9 || 9;

  //console.log(weight);

  //trim text from both sides with the weight
  let trimmedInput = inputValue.slice(weight, (inputValue.length - weight));
  //console.log(trimmedInput);

  //split the text per blocks
  let chars = trimmedInput.match(/.{1,8}/g);
  //console.log(chars);

  //convert to ints
  let intchars = chars.map(x => parseInt(x, 2));
  //console.log(intchars);

  //convert to letters
  let letters = intchars.map(x => String.fromCharCode(x));
  //console.log(letters);

  let resultSpan = document.getElementById('result');
  resultSpan.innerHTML = letters.join('');
}
