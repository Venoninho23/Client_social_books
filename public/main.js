
const gitHubId = document.querySelector('input[type=text]');
const button = document.querySelector('#btn-buscar');

button.onclick = function(){
    // Coneção com a API

    fetch('https//api.github.com/user/' + gitHubId.value)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error('Erro de requisição');
        }

    })
    .then(data =>{
        document.querySelector('#name').textContent = data.name;
        document.querySelector('#bio').textContent = data.bio;
        document.querySelector('#followers').textContent = data.followers;
        document.querySelector('#location').textContent = data.location;

        document.querySelector('#avatar').src = data.avatar_url
    }).catch(err =>{
        throw new Error('Erro ao mostrar os dados');
    })
}
