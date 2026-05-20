function cafe(){
    fetch('dados.json')
         .then(response => response.json())
         .then(dadinho=>{
             tablet = document.getElementById('destino');

             dadinho.forEach(pessoa => {
                let linha = document.createElement('tr');

                linha.innerHTML = `
                <td> ${pessoa.nome} </td>
                <td> ${pessoa.idade} </td>
                <td> ${pessoa.cidade} </td>
                <td> ${pessoa.apelido} <td>
                <button type="button" onclick="apagarLinha(this)">deletar</button>
                `;

            tablet.appendChild(linha);
        });
    })
}
function apagarLinha(botao) {
    botao.closest('tr').remove();
}