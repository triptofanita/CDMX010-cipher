const cipher = {
  
  encode (string,offset)  {
    let output =[];
    //offset = parseInt(offset,10);

    for (let i = 0 ; i < string.length; i ++) {
    let asciiLetter = string.charCodeAt(i);
    let stringResult = ((asciiLetter + 65 - offset) % 26 + 65);
     output[i] = String.fromCharCode(stringResult);
    };
    return output;
    //document.getElementById('result-refugee').textContent = output.join("");
  };


 decode (string,offset) {
    let output =[];
    for (let i = 0 ; i < string.length; i ++) {
     let asciiLetter = string.charCodeAt(i);
     let stringResult = ((asciiLetter + 65 - offset) % 26 + 65);
     output[i] = String.fromCharCode(stringResult);
    };
    return output;
    //document.getElementById('result-refugee').textContent = output.join("");
  }
};

export default '/cipher.js';

  