const livroID = document.querySelector('input[type=number]');
const btn = document.querySelector('input[type=button]');
const errorMessage = document.getElementById('error-message'); 

btn.onclick = function() {
 
    errorMessage.textContent = ''; 
    errorMessage.style.display = 'none';

    fetch(`http://localhost:8080/livros/${livroID.value}`)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error('Erro na requisição');
        }
    }).then(data => {
        document.querySelector('#nome').textContent = data.nome;
        document.querySelector('#editora').textContent = data.editora;
        document.querySelector('#autor').textContent = data.autor;
        document.querySelector('#resumo').textContent = data.resumo;
    }).catch(e => {
        console.log(e);
        // Exibir mensagem de erro
        
        errorMessage.textContent = 'Erro ao carregar dados. Verifique o ID do livro.';
        errorMessage.style.display = 'block';
    });
};
