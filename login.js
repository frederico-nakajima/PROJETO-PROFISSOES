// Seleciona o diálogo de login
const loginDialog = document.getElementById('loginDialog');

// Adiciona um ouvinte de evento para o evento 'show'
loginDialog.addEventListener('show', function() {
    // Seleciona o primeiro campo de entrada no formulário
    const firstInput = loginDialog.querySelector('input[type="email"]');
    // Remove o foco do campo de entrada
    firstInput.blur();
});


