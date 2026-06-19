//buscar ----> então... pegue a resposta e faça

fetch('https://rickandmortyapi.com/api/character')  
    .then(response => {
     return response.json()
})  

    .then(data => {
        console.log(data)

        console.log(data.results[0].name)

        let div = document.createElement('div');

        div.innerHTML='<h2>' + data.results[0].name +'</h2>'
        div.innerHTML += '<p>' + data.results[0].species + '</p>'
        div.innerHTML += '<img src="' + data.results[0].image + '"/>';

        let body = document.querySelector('body');

        body.appendChild(div);
    })