

  //document.getElementById('name-refugee').addEventListener('keyup',function(){ //ésta función permite que lo que escribe el usuario se convierta en mayúsculas
  //mantener el texto en mayúsculas 
document.getElementById('code').addEventListener('click',function(){ //Se agrega un evento al botón id 'code'
     //let value = document.getElementById('name-refugee').value.toUpperCase(); //declaro la variable value, agrego al id 'name-refugge' que su contenido esté em mayúsculas
     //document.getElementById('result-refugee').textContent = value; //en 'result-refugee' obtener el texto contenido del value, o sea de la línea anterior
 
let string = document.getElementById('name-refugee').value.toUpperCase(); //declaro la variable value, agrego al id 'name-refugge' que su contenido esté em mayúsculas

let offset = document.getElementById('offset').value;
offset = parseInt(offset, 10)
let spaceAscii = " " 

//cipher.encode (offset,string); //Método para cipher.js
let output =[];
for (let i = 0 ; i < string.length; i ++) {
 let asciiLetter = string.charCodeAt(i);
 let stringResult = ((asciiLetter - 65 + offset) % 26 + 65);
  //console.log(stringResult);

  if (asciiLetter === 32) {
      spaceAscii +- string[i] 
    } (string.charCodeAt(i)>= 65 && string.charCodeAt(i)<= 90); {
    stringResult = ((asciiLetter - 65 + offset) % 26 + 65);
    output[i] = String.fromCharCode(stringResult); 
    spaceAscii +- output;
    };
  };
  //console.log(output.join(""));
  document.getElementById('result-refugee').textContent = output.join(""); //en 'result-refugee' obtener el texto contenido del value, o sea de la línea anterior     
});

 document.getElementById('decode').addEventListener('click',function(){ //Se agrega un evento al botón id 'decode'
 //let value = document.getElementById('name-refugee').value.toLowerCase(); //declaro la variable value, agrego al id 'name-refugge' que su contenido esté em minúsculas
 //document.getElementById('result-refugee').textContent = value; //en 'result-refugee' obtener el texto contenido del value, o sea de la línea anterior

 let string = document.getElementById('clave-refugee').value.toUpperCase();

 let offset = document.getElementById('offset').value;


 //cipher.decode (offset, string);
  let output =[];
  for (let i = 0 ; i < string.length; i ++) {
   let asciiLetter = string.charCodeAt(i);
   let stringResult = ((asciiLetter + 65 - offset) % 26 + 65);
   output[i] = String.fromCharCode(stringResult);
 };
 // console.log(output.join(""));

  document.getElementById('result-refugee').textContent = output.join("");
});

//});

 // para devolver el código ASCII del caracter en el índice proporcionado.
 // devuelve cadena de caracteres con código ASCII

 