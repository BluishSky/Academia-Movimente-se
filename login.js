document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Simulando login
        alert('Login bem-sucedido! Bem-vindo ao sistema.');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
