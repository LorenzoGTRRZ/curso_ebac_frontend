const form = document.getElementById('form-comparacão');

form.addEventListener("submit", function(e){
    e.preventDefault();

const numeroA = parseFloat (document.getElementById('numero-a').value);
const numeroB = parseFloat (document.getElementById('numero-b').value);

function comparaNumero(numeroA, numeroB){
    if (numeroB > numeroA){
        alert('Formulário valido, pois o valor de B é maior que A');
        return true;
    } else {
        alert('Formulário invalido, pois o valor de A é maior que B');
        return false;
    }
}
formEvalido = comparaNumero(numeroA, numeroB)
});