document.getElementById('textInput').addEventListener('input', function() {
    const contador = this.value.length;
    document.getElementById('contador').textContent = contador + ' caracteres';
});