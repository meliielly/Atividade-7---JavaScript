//login
const login = prompt('Login: ');

//password
const password = prompt ('Senha: ');

//vereficacao
if (login == 'aluno' && password == 123 || login == 'professor' && password == 456) {
    alert('Login realizado com sucesso!');
    
} else {
    alert('[ERRO] Falha ao realizar o login!');
}