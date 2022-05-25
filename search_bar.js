var jsonPreData = JSON.stringify(data);
var jsonData = JSON.parse(jsonPreData);

function RemovePreviousNews() {
    let items = document.getElementsByClassName('resultado');

    for(let i = 0; i < items.length; i++) {
        items[i].remove();
    }

    document.getElementById('resultados').innerHTML = "";
}

window.onload = () => {
    let btn = document.getElementById('search_btn');

    btn.onclick = function() {
        RemovePreviousNews();

        for(let i = 0; i < jsonData["noticias"].length; i++) {
            if(jsonData.noticias[i]["titulo"].toLowerCase().includes(search_bar.value.toLowerCase()) || jsonData.noticias[i]["data"].toLowerCase().includes(search_bar.value.toLowerCase()) || jsonData.noticias[i]["texto"].toLowerCase().includes(search_bar.value.toLowerCase())) {
                document.getElementById("resultados").innerHTML += `<div class="resultado"><h2><a href="#">${jsonData.noticias[i].titulo}</a></h2><h3>${jsonData.noticias[i].data}</h2><p>${jsonData.noticias[i].texto}</p></div><br>`;
            }
        }
    }
}