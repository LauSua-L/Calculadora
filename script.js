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


// esta funcion se crea ahora el teclado y las teclas tienen las mismas funciones
function escribir(valor) {
    pantalla.value += valor;
}

// se escucha al teclado
document.addEventListener('keydown', function(event) {
    const tecla = event.key;

    // Si es un número del 0 al 9
    if (tecla >= '0' && tecla <= '9') {
        escribir(tecla); 
    }

    // Si son operadores
    if (['+', '-', '*', '/'].includes(tecla)) {
        escribir(tecla);
    }

    // teclas especiales
    if (tecla === 'Enter') {
        event.preventDefault(); // Para que no haga cosas raras por su funcion por defecto
        calcular(); //esta queda igual
    }

    if (tecla === 'Backspace') {
        borrarUno(); //  borrar
    }

    if (tecla === 'Escape') {
        limpiarPantalla(); // función de la C
    }
    if (tecla === '%') {
    calcularPorcentaje(); 
}
});