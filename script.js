document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;
    
    if (senha !== confirmaSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    alert('Cadastro realizado com sucesso!');
    // Aqui você pode adicionar a lógica para salvar os dados ou enviar para o servidor.
});
