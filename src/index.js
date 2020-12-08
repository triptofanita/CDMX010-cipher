

  //document.getElementById('name-refugee').addEventListener('keyup',function(){ //ésta función permite que lo que escribe el usuario se convierta en mayúsculas
  //mantener el texto en mayúsculas 
document.getElementById('code').addEventListener('click',function(){ //Se agrega un evento al botón id 'code'
     //let value = document.getElementById('name-refugee').value.toUpperCase(); //declaro la variable value, agrego al id 'name-refugge' que su contenido esté em mayúsculas
     //document.getElementById('result-refugee').textContent = value; //en 'result-refugee' obtener el texto contenido del value, o sea de la línea anterior
 
let string = document.getElementById('name-refugee').value.toUpperCase(); //declaro la variable value, agrego al id 'name-refugge' que su contenido esté em mayúsculas

let offset = document.getElementById('offset').value;

//encode(string, offset); //Método para cipher.js
  let output = [];
  for (let i = 0; i < string.length; i ++) {
  let asciiLetter = string.charCodeAt(i); // para devolver el código ASCII del caracter en el índice proporcionado.
  let stringResult = (((asciiLetter - 65) + offset) % 26) + 65; // devuelve cadena de caracteres con código ASCII
  output[i] = stringResult; 
  };
  console.log(output);
  //document.getElementById('result-refugee').textContent = value; //en 'result-refugee' obtener el texto contenido del value, o sea de la línea anterior     
});

 document.getElementById('decode').addEventListener('click',function(){ //Se agrega un evento al botón id 'decode'
 let value = document.getElementById('name-refugee').value.toLowerCase(); //declaro la variable value, agrego al id 'name-refugge' que su contenido esté em minúsculas
 document.getElementById('result-refugee').textContent = value; //en 'result-refugee' obtener el texto contenido del value, o sea de la línea anterior
  });

//});
