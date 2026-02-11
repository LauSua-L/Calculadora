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