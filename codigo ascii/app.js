function encriptar(elemento){
  const palabra = document.getElementsByTagName("input")[0].value;
  const palabra_codificada = btoa(palabra);
  document.getElementById("nuestra palabra secreta es...").innerHTML=palabra_codificada
}
function desencriptar(elemento){
  const palabra = document.getElementsByTagName("input")[0].value;
  const palabra_descodificada = atob(palabra);
  document.getElementById("nuestra palabra secreta es...").innerHTML=palabra_descodificada

}
