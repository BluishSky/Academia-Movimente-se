document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de ação ao clicar nos botões de aluno ou treino
    document.querySelectorAll('.btn-list-item').forEach(button => {
        button.addEventListener('click', () => {
            alert(`Você clicou em ${button.innerText}`);
        });
    });
    
    // Ação para o botão "Cadastrar novo aluno"
    document.querySelector('.btn-add-student').addEventListener('click', () => {
        alert('Cadastrar novo aluno');
    });

    // Ação para o botão de adicionar treino
    document.querySelector('.btn-add-treino').addEventListener('click', () => {
        alert('Adicionar novo treino');
    });
});

/* Função para o horário */
function mostrarHorarioAtual() {
    const dataAtual = new Date();
    const horas = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0');
    document.getElementById('horario').textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(mostrarHorarioAtual, 1000); // Atualiza a cada segundo