async function cafe() {
    const precos = document.getElementById('precos');

    try{
       const response = await fetch('dados.json');

       if (!response.ok) throw new Error('falha ao carregar dador');

       const cafes = await response.json();

       // Limpa o container e renderiza de forma segura
       precos.innerHTML = '';

       //Supondo que 'cafes' agora seja uma lista (Array)
       cafes.forEach(item => {
         const card = document.createElement('div');
         card.className = 'card';

         card.innerHTML = `
             <img src="imagem/${item.imagem}" alt="Foto de ${item.nome}">
             <h3></h3>
             <p></p>
             <a href="${item.endereco}">
                 <button type="button">Saiba mais</button>
             </a>
         `;

         // Atribuição segura de texto para evitar XSS
         card.querySelector('h3'),textContent = item.nome;
         card.querySelector('p'),textContent = item.descricao;

         destino.appendChild(card);
       })
    }catch (error) {
        console.error('Erro na requisitação:', error);
        destino.innerHTML = `<p>Sinto muito, não foi possível carregar as informações no momento.</p>`;
    }
}
