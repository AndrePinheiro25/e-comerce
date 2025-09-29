import { buscarInformacoes } from "../services/cards_services.js";

const cardsSection = document.getElementById("cards");

export async function createCards() {
    let bdCards = await buscarInformacoes();
    for (let i = 0; i < bdCards.length; i++) {
        let card = document.createElement('div');
        card.className = 'card';

        let copa = document.createElement("div");
        copa.className = "copa";

        let img_copa = document.createElement('div');
        img_copa.className = 'img';
        img_copa.style.backgroundImage = `url(${bdCards[i].logo})`;

        copa.appendChild(img_copa);

        let ano = document.createElement("div");
        ano.className = 'ano';
        [bdCards[i].ano[0], bdCards[i].ano[1], bdCards[i].ano[2], bdCards[i].ano[3]].forEach(num => {
            let p = document.createElement("p");
            p.textContent = num;
            ano.appendChild(p);
        });
        copa.appendChild(ano);

        card.appendChild(copa);

        let informacoes = document.createElement("div");
        informacoes.className = "informacoes";

        let dados = document.createElement("div");
        dados.className = "dados";

        let campeao = document.createElement("h3")
        campeao.textContent = 'Campeão';

        let p1 = document.createElement("h1")
        p1.textContent = bdCards[i].campeao;

        let vice = document.createElement("h3")
        vice.textContent = 'Vice';

        let p2 = document.createElement("h1")
        p2.textContent = bdCards[i].viceCampeao;

        let sede = document.createElement("h3")
        sede.textContent = 'Sede';

        let p3 = document.createElement("h1")
        p3.textContent = bdCards[i].sede;

        dados.appendChild(campeao);
        dados.appendChild(p1);
        dados.appendChild(vice);
        dados.appendChild(p2);
        dados.appendChild(sede);
        dados.appendChild(p3);

        informacoes.appendChild(dados);

        let img_art = document.createElement('div');
        img_art.className = 'img';
        img_art.style.backgroundImage = `url(${bdCards[i].artilheiro})`

        informacoes.appendChild(img_art);

        card.appendChild(informacoes)

        cardsSection.appendChild(card);
    }
}