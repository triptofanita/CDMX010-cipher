const cipher = {
  
    encode(offset, string)  {
      let output = [];
      let stringResult = "";
      offset = parseInt(offset, 10);
  
      for (let i = 0; i < string.length; i++) {
        let asciiLetter = string.charCodeAt(i);
        //espacio
        if (asciiLetter == 32) {
          output[i] = String.fromCharCode(asciiLetter); 
        } else {
          stringResult = ((asciiLetter - 65 + offset) % 26 + 65);
          output[i] = String.fromCharCode(stringResult);
        }
      }
      return output;  
    },
                                                                                                                   
   decode(offset, string) {
      let output = []
      let stringResult = "";
  
      for (let i = 0; i < string.length; i++) {
        let asciiLetter = string.charCodeAt(i);
        //espacio
        if (asciiLetter == 32) {
          output[i] = String.fromCharCode(asciiLetter); 
        } else {
          stringResult = ((asciiLetter + 65 - offset) % 26 + 65);
          output[i] = String.fromCharCode(stringResult);
        }
      }
      return output;  
    }
  };
  
  export default cipher;                
  
                                      