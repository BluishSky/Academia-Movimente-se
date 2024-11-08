// script.js
function selectTipoTreino(tipo) {
    // Remove a classe 'selected' de todos os botões de tipo
    const buttons = document.querySelectorAll('.type-button');
    buttons.forEach(button => button.classList.remove('selected'));

    // Adiciona a classe 'selected' ao botão selecionado
    const selectedButton = Array.from(buttons).find(button => button.textContent === tipo);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}
