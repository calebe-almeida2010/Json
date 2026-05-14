function info() {
    fetch('dados.json')
        .then(responde => responde.json())
        .then(dadinho => {
            tablet = document.getElementById('destino');

            dadinho.forEach(pessoa => {
                let linha = document.createElement('tr');

                linha.innerHTML = `
                <td> ${pessoa.nome} </td>
                <td> ${pessoa.idade} </td>
                <td> ${pessoa.altura} </td>
                <td> ${pessoa.apelido} </td>
                <td> <button type="button" onclick="info()">delete</button>
                `
                tablet.appendChild(linha);

            });
            
        })
}

function infor(botao) {
    botao.closet('tr').remove();

}