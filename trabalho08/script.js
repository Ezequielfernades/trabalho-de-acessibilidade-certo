// Função para inverter as cores
function invertColors() {
    // Verifica se o corpo do documento tem a classe 'inverted'
    if (document.body.classList.contains('inverted')) {
        // Remove a classe 'inverted' para voltar às cores originais
        document.body.classList.remove('inverted');
    } else {
        // Adiciona a classe 'inverted' para inverter as cores
        document.body.classList.add('inverted');
    }
}

// Evento de clique para acionar a função de inversão de cores
document.getElementById('toggle-contrast').addEventListener('click', function() {
    invertColors();
});

// Função para aumentar a fonte
function increaseFontSize() {
    // Obtém o tamanho atual da fonte
    var currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    // Aumenta o tamanho da fonte em 2 pixels
    var newSize = currentSize + 2;
    // Define o novo tamanho da fonte para o corpo do documento
    document.body.style.fontSize = newSize + 'px';
}

// Evento de clique para acionar a função de aumento de fonte
document.getElementById('increase-font').addEventListener('click', function() {
    increaseFontSize();
});

// Função para diminuir a fonte
function decreaseFontSize() {
    // Obtém o tamanho atual da fonte
    var currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    // Diminui o tamanho da fonte em 2 pixels
    var newSize = currentSize - 2;
    // Define o novo tamanho da fonte para o corpo do documento
    document.body.style.fontSize = newSize + 'px';
}

// Evento de clique para acionar a função de diminuição de fonte
document.getElementById('decrease-font').addEventListener('click', function() {
    decreaseFontSize();
});

