function Logar() {

    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    if (login == "Agatha" && senha == "06/02") {
        window.alert('Conta Logada com Sucesso!')
        window.location.href = "index.html"
    } else {
        window.alert('Login ou senha incorreto!')
    }
}

function Click() {

    var click = document.getElementById('es').value

    if (click = Click) {
        window.alert('redefinir senha.')
        window.location.href = "recusenha.html"
    }
}

function Criarc() {

    var criar = document.getElementById('criar').value

    if (criar = Click) {
        window.alert('Crie uma Conta.')
        window.location.href = "criarconta.html"
    }
}