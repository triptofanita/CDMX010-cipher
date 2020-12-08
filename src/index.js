

document.getElementById('name-refugee').addEventListener('keyup',function(){ //ésta función permite que lo que escribe el usuario se convierta en mayúsculas
  //mantener el texto en mayúsculas 
document.getElementById('code').addEventListener('click',function(){ //Se agrega un evento al botón id 'code'
     let value = document.getElementById('name-refugee').value.toUpperCase(); //declaro la variable value, agrego al id 'name-refugge' que su contenido esté em mayúsculas
     document.getElementById('result-refugee').textContent = value; //en 'result-refugee' obtener el texto contenido del value, o sea de la línea anterior
 });

});
