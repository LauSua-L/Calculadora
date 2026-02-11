const pantalla = document.getElementById('pantalla');


function agregar(valor){
    pantalla.value += valor;
}

function limpiar(){
    pantalla.value='';
}

function borrarUno(){
    pantalla.value = pantalla.value.slice(0,-1)
}

function calcular(){
try{
    pantalla.value = eval(pantalla.value);

}catch(error){
    pantalla.value='error';
    setTimeout(() => limpiar(), 1500)
}
}

function calcularRaiz() {
    // Math.sqrt calcula la raíz del número que esté en la pantalla
    pantalla.value = Math.sqrt(eval(pantalla.value));
}

function calcularPotencia() {
    const numero = eval(pantalla.value);
    pantalla.value = Math.pow(numero, 2); // Eleva al cuadrado
}

function calcularPorcentaje() {
    pantalla.value = eval(pantalla.value) / 100;
}
