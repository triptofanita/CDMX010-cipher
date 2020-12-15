window.cipher = {
  // ...
};

  code (offset, string)  {
    let output =[];
    let offset = parseInt(offset,10);

    for (let i = 0 ; i < string.length; i ++) {
    let asciiLetter = string.charCodeAt(i);
    let stringResult = ((asciiLetter + 65 - offset) % 26 + 65);
     output[i] = String.fromCharCode(stringResult);
     };
  };

  decode (offset, string) {
    let output =[];
    
    for (let i = 0 ; i < string.length; i ++) {
     let asciiLetter = string.charCodeAt(i);
     let stringResult = ((asciiLetter + 65 - offset) % 26 + 65);
     output[i] = String.fromCharCode(stringResult);
   };
  };