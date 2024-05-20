const form = document.querySelector("#Form")
const nameInput = document.querySelector("#Nome")
const emailInput = document.querySelector("#Email")
const passwordInput = document.querySelector("#senha")

form.addEventListener("submit" ,  (event) => {

    event.preventDefault();

    // Verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("Por favor , preencha o seu nome.");
        return;
    }
// Verifica se o email está vazio
if(emailInput.value === ""){
    alert("Por favor , preencha o seu email.");
    return;

    // Se todos os campos  estiverem corretamente preenchidos , envie o form
    form.submit();

}});

function cadastrar(){
    alert("Cadastrado")
}
