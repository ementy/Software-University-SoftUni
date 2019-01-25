function solve() {
    let firstButton = document.querySelector(`#exercise button[name="myBtn"]`);
    let secondButton = document.querySelector(`#exercise button[name="peshoBtn"]`);

    let chat = document.getElementById('chatChronology');

    firstButton.addEventListener("click", clickEvent);

    secondButton.addEventListener('click', clickEvent);

    function clickEvent(e) {
        let divMessage = document.createElement('div');
        let span = document.createElement('span');
        let par = document.createElement('p');

        let source = e.target.name;
        let content;

        if (source === 'myBtn') {
            span.textContent = 'Me';
            content = document.getElementById('myChatBox').value;
        }
        else {
            span.textContent = 'Pesho';
            content = document.getElementById('peshoChatBox').value;
        }

        par.append(content);

        divMessage.appendChild(span);
        divMessage.appendChild(par);

        if (source === 'myBtn') {
            divMessage.style.textAlign = 'left';
        }
        else {
            divMessage.style.textAlign = 'right';
        }

        chat.appendChild(divMessage);

        document.getElementById('myChatBox').value = "";
        document.getElementById('peshoChatBox').value = "";
    }
}