const userTableBody = document.querySelector("#userTable tbody");

function renderUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    userTableBody.innerHTML = "";

    users.forEach((user, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="editUser(${index})">Editar</button>
                <button onclick="deleteUser(${index})">Excluir</button>
            </td>
        `;

        userTableBody.appendChild(row);
    });
}

window.editUser = function(index) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users[index];

    const newName = prompt("Editar nome:", user.name);
    const newEmail = prompt("Editar email:", user.email);

    if (newName && newEmail && isEmailValid(newEmail)) {
        user.name = newName;
        user.email = newEmail;
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers();
    } else {
        alert("Dados inválidos.");
    }
}

window.deleteUser = function(index) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers();
    }
}

// Renderizar a lista de usuários ao carregar a página
document.addEventListener("DOMContentLoaded", renderUsers);
