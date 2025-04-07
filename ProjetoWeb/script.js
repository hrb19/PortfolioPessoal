document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio real do formulário

    let nome = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("message").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um e-mail válido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");
});