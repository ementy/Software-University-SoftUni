function solve() {
    let dropdown = document.querySelector('select[id="selectMenuTo"]');
    //console.log(dropdown);

    //add binary option
    let binaryOption = document.createElement('option');
    binaryOption.setAttribute('value', 'binary');
    let binaryText = document.createTextNode('Binary');
    binaryOption.appendChild(binaryText);

    //add hexadecimal option
    let hexaOption = document.createElement('option');
    hexaOption.setAttribute('value', 'hexadecimal');
    let hexaText = document.createTextNode('Hexadeicmal');
    hexaOption.appendChild(hexaText);

    dropdown.appendChild(binaryOption);
    dropdown.appendChild(hexaOption);

    let buttons = document.getElementsByTagName('button');
    let button = buttons[0];
    button.addEventListener('click', () => {
        let numValue = document.getElementById('input').value;
        let option = document.querySelector('select[id="selectMenuTo"]');
        let resultOutput = document.getElementById('result');

        if (option.value == 'binary') {
            let result = dec2bin(numValue);
            resultOutput.value = result;
        }
        else if (option.value == 'hexadecimal') {
            let result = dec2hex(numValue);
            resultOutput.value = result;
            console.log(result);
        }
    });

    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
    function dec2hex(dec) {
        return parseInt(dec).toString(16).toUpperCase()
    }
}