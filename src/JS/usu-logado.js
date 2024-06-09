let userLogado = JSON.parse(localStorage.getItem('userLogado'))  

let logado = document.querySelector('#logado')

logado.innerHTML = `Olá </br> ${userLogado.name}`

if(localStorage.getItem('token')== null){
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = "fazer-log.html";
}


function logout(){
    localStorage.removeItem('token')
    window.location.href = "index.html";
}