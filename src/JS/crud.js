// Função para renderizar os usuários na tabela
function renderizarUsuarios() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userTableBody = document.querySelector("#userTable tbody");
    userTableBody.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editarUsuario('${user.email}')">Editar</button>
                <button onclick="excluirUsuario('${user.email}')">Excluir</button>
            </td>
        `;

        userTableBody.appendChild(row);
    });
}

// Função para editar um usuário
function editarUsuario(email) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(user => user.email === email);
    const user = users[userIndex];

    const novoNome = prompt("Editar nome:", user.name);
    const novoEmail = prompt("Editar email:", user.email);

    if (novoNome && novoEmail && isEmailValid(novoEmail)) {
        user.name = novoNome;
        user.email = novoEmail;
        users[userIndex] = user;
        localStorage.setItem("users", JSON.stringify(users));
        renderizarUsuarios();
    } else {
        alert("Dados inválidos.");
    }
}

// Função para excluir um usuário
function excluirUsuario(email) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const confirmacao = confirm("Tem certeza que deseja excluir este usuário?");

    if (confirmacao) {
        const novosUsuarios = users.filter(user => user.email !== email);
        localStorage.setItem("users", JSON.stringify(novosUsuarios));
        renderizarUsuarios();
    }
}

// Função para validar o formato do email
function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Renderiza os usuários ao carregar a página
document.addEventListener("DOMContentLoaded", renderizarUsuarios);
