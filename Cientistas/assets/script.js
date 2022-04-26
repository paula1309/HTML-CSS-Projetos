document.getElementById("botaoEnviar").addEventListener("click", Enviar )

function Enviar() {
    if (document.getElementById("nome").value && document.getElementById("email").value && document.getElementById("telefone").value != "") {
        alert("Pronto! Você receberá novidades por e-mail.")
    }else {
        alert("Por favor, preencha os campos nome, email e telefone!")
    }
}






