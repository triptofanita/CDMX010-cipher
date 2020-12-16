const cipher = {
  encode (offset, string)  {
    let output =[];
    offset = parseInt(offset,10);

    for (let i = 0 ; i < string.length; i ++) {
    let asciiLetter = string.charCodeAt(i);
    let stringResult = ((asciiLetter + 65 - offset) % 26 + 65);
     output[i] = String.fromCharCode(stringResult);
    };
    document.getElementById('result-refugee').textContent = output.join("");
  }
};

const cipher = {
 decode (offset, string) {
    let output =[];
    for (let i = 0 ; i < string.length; i ++) {
     let asciiLetter = string.charCodeAt(i);
     let stringResult = ((asciiLetter + 65 - offset) % 26 + 65);
     output[i] = String.fromCharCode(stringResult);
    };
    document.getElementById('result-refugee').textContent = output.join("");
  }
};

export default '/cipher.js';

  