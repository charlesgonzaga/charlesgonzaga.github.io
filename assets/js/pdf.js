$(document).ready(function() {
    $('#download-pdf-btn').on('click', function(e) {
        e.preventDefault();
        
        // Adicionar classe especial para ajustar layout na impressão
        document.body.classList.add('printing-pdf');
        
        // Usar a impressão padrão do navegador
        window.print();
        
        // Remover classe após um pequeno delay (para garantir que a impressão iniciou)
        setTimeout(function() {
            document.body.classList.remove('printing-pdf');
        }, 1000);
    });
});

