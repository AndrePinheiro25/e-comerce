// import { bdcards } from "./bdcards.js";
const cardsSection = document.getElementById("cards");

export function createCards() {
    for (let i = 0; i < 15; i++) {
        let card = document.createElement('div');
        card.className = 'card';

        let copa = document.createElement("div");
        copa.className = "copa";

        let img = document.createElement("img");
        img.className = "logo";
        img.src = "https://tse3.mm.bing.net/th/id/OIP.PMBIZTQNobBOOYKK3UrLXwHaI4?rs=1&pid=ImgDetMain&o=7&rm=3";
        copa.appendChild(img);

        let ano = document.createElement("div");
        ano.className = "ano";
        ["1", "9", "3", "0"].forEach(num => {
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
        p1.textContent = 'Uruguai';

        let vice = document.createElement("h3")
        vice.textContent = 'Vice';

        let p2 = document.createElement("h1")
        p2.textContent = 'Tchecoslováquia';

        let sede = document.createElement("h3")
        sede.textContent = 'Uruguai';

        let p3 = document.createElement("h3")
        p3.textContent = 'Uruguai';

        dados.appendChild(campeao);
        dados.appendChild(p1);
        dados.appendChild(vice);
        dados.appendChild(p2);
        dados.appendChild(sede);
        dados.appendChild(p3);

        informacoes.appendChild(dados);

        let artilheiro = document.createElement("img");
        artilheiro.className = "artilheiro";
        artilheiro.src = "https://tse2.mm.bing.net/th/id/OIP.j0ageLhdLgvdTCWWykrPWAHaKp?rs=1&pid=ImgDetMain&o=7&rm=3";

        informacoes.appendChild(artilheiro);

        card.appendChild(informacoes)

        cardsSection.appendChild(card);
    }
}