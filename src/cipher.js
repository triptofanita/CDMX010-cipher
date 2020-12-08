const cipher = {
  // ...
};

export default cipher;


output = [];

function encode(string, offset){
  for (let = i; i = value.length; i ++); {
    AsciiLetter = value.charCodeAt(i); // para devolver el código ASCII del caracter en el índice proporcionado.
    stringresult= ((AsciiLetter - 65 + offset) % 26) + 65; // devuelve cadena de caracteres con código ASCII
    output[i]=stringresult
  }
}