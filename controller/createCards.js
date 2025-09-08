const cardsSection = document.getElementById("cards");

export function createCards() {
    for (let i = 0; i < 15; i++) {
        let card = document.createElement('div');
        card.className = 'card';

        //O resto do cartão

        cardsSection.appendChild(card);
    }
}