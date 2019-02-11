function validate() {
    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;

    document.querySelector('button')
        .addEventListener('click',validNum);

    function validNum(){
        let input = document.querySelector('input').value;
        let lastDigit = input[input.length - 1];

        for(let i = 0;i < 9;i++){
            let temp1 = input[i];
            let temp2 = weights[i];
            sum += temp1 * temp2;
        }

        let reminder = sum % 11;

        if(reminder === 10){
            reminder = 0;
        }

        let result = document.querySelector('#response');
        
        if(+lastDigit === reminder){
            result.textContent = 'This number is Valid!';
        }else{
            result.textContent = 'This number is NOT Valid!';
        }
    }
}