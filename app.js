document.getElementById(`btnMudaFundo`).addEventListener('click', mudarFundo)
function mudarFundo(){    
let cor = document.getElementById('corFundo').value
document.body.style.backgroundColor = cor
}
    let cidades = [
        { "id": 1, "cidade": "Hong Kong", "país": "China", "população": 7496000 },
        { "id": 2, "cidade": "Shanghai", "país": "China", "população": 27050000 },
        { "id": 3, "cidade": "Tokyo", "país": "Japão", "população": 13929286 },
        { "id": 4, "cidade": "Seul", "país": "Coréia do Sul", "população": 9736000 },
        { "id": 5, "cidade": "Bangkok", "país": "Tailândia", "população": 11013000 }
    ]
document.getElementById(`btnCarregaDados`).addEventListener('click', carregaDados)
function carregaDados () {
   let ulCidades = document.getElementById('ulCidades')
   strTextoHTML = ''
   for (let i = 0; i < cidades.length; i++){
    let cidade = cidades[i];
    strTextoHTML += `<li>(${cidade.cidade} - ${cidade.país})</li>`
   }
   ulCidades.innerHTML = strTextoHTML
}




































