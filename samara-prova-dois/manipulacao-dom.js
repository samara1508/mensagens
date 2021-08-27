const formulario = document.querySelector('form[name="enviar-mensagem"]');

function adicionaCard(inputTitulo, inputMensagem) {
    const divAdicionarCards = document.querySelector('.cards-adicionados');
    
    const divCardAdicionado = document.createElement('div');
    divCardAdicionado.innerHTML = 
    ` 
    <div class="novocard">
        <div class="cont">
            <p class="titulo">${inputTitulo}</p>
            <p class="mens">${inputMensagem}</p>
        </div>
    </div>
    
    `;
  
    divAdicionarCards.appendChild(divCardAdicionado);
}
if (formulario) {

    formulario.onSubmit

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputTitulo = document.getElementById('input-titulo').value;
        const inputMensagem = document.getElementById('input-mensagem').value;

        adicionaCard(inputTitulo, inputMensagem);
        
        const botaoLimpar = document.querySelector('button[type="reset"]');
        botaoLimpar.click();
    });
}

/*function adicionarAcaoRemover(card) {
    const btnRemover = document.createElement('a');
    btnRemover.className = 'btn-remover';
    btnRemover.innerText = 'Remover';
    btnRemover.onclick = event => {
    event.preventDefault();
    card.remove();
    }
    card.appendChild(btnRemover);
}*/




