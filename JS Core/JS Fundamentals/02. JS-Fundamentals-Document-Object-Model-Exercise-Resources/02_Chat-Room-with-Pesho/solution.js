function solve() {
    let buttnons = Array.from(document.getElementsByTagName('button'));
    let inputsFields = Array.from(document.getElementsByTagName('input'));

    buttnons.forEach((btn) => {
        btn.addEventListener('click', function(e) {
            let divElement = document.createElement('div');
            let spanElement = document.createElement('span');
            let pElement = document.createElement('p');

            let senderBtn = e.target.name;

            if (senderBtn === 'myBtn') {
                spanElement.textContent = 'Me';
                pElement.textContent = document.getElementById('myChatBox').value;

                divElement.style.textAlign = 'left'

            } else if (senderBtn === 'peshoBtn') {
                spanElement.textContent = 'Pesho';
                pElement.textContent = document.getElementById('peshoChatBox').value;

                divElement.style.textAlign = 'right'
            }

            divElement.appendChild(spanElement);
            divElement.appendChild(pElement);

            document.getElementById('chatChronology').appendChild(divElement);
            inputsFields[0].value = "";
            inputsFields[1].value = "";
        });
    });
}