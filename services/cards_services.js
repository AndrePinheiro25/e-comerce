const apiUrl = 'https://api-ivory-six-58.vercel.app/copas-do-mundo';
export async function buscarInformacoes() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`)
        }
        const dados = await response.json();

        console.log('Dados recebidos com sucesso:', dados);

        for (let i = 0; i < dados.length; i++) {
            for (let j = 0; j < (dados.length - 1); j++) {
                if (dados[j].ano > dados[j + 1].ano) {
                    let aux = dados[j];
                    dados[j] = dados[j + 1];
                    dados[j + 1] = aux;
                }
            }
        }

        return dados;

    } catch (error) {
        console.error('falha ao buscar informações:', error);
    }
}