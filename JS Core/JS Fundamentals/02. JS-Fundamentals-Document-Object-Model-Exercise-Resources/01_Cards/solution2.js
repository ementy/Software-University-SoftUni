function solve() {
    let exerciseDiv = document.getElementById('exercise');
    let cardsImg = exerciseDiv.getElementsByTagName('img');
    let resultDiv = document.getElementById('result');

    Array.from(cardsImg).forEach(function (element) {
        element.addEventListener('click', () => {
            let cardName = element.name;

            if (element.parentElement.id === 'player1Div' && !resultDiv.children[0].textContent) {
                resultDiv.children[0].append(cardName)
                element.src = "images/whiteCard.jpg"
            }
            else if (element.parentElement.id === 'player2Div' && !resultDiv.children[2].textContent) {
                resultDiv.children[2].append(cardName)
                element.src = "images/whiteCard.jpg"
            }

            let card1 = resultDiv.children[0].textContent;
            let card2 = resultDiv.children[2].textContent;

            if (resultDiv.children[0].textContent && resultDiv.children[2].textContent) {
                let card1num = parseInt(card1);
                let card2num = parseInt(card2);
                let player1cards = document.getElementById('player1Div');
                let player2cards = document.getElementById('player2Div');

                if (card1num > card2num) {
                    player1cards.children.namedItem(card1).style.border = "2px solid green";
                    player2cards.children.namedItem(card2).style.border = "2px solid darkred";
                }
                else if (card2num > card1num) {
                    player2cards.children.namedItem(card2).style.border = "2px solid green";
                    player1cards.children.namedItem(card1).style.border = "2px solid darkred";
                }
                
                let result = `[${card1} vs ${card2}]`;
                let historyDiv = document.getElementById('history');
                historyDiv.append(result);
            }

            setTimeout(clearSpan, 2000);
        })
    });

    function clearSpan() {
        let resultDiv = document.getElementById('result');
        resultDiv.children[0].textContent = "";
        resultDiv.children[2].textContent = "";
    }
}

