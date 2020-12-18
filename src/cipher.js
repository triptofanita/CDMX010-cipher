
const cipher = {
  
  encode(offset, string)  {
    let output = [];
    let result = "";
    offset = parseInt(offset, 10);

    for (let i = 0; i < string.length; i++) {
      let asciiLetter = string.charCodeAt(i);
      let stringResult = ((asciiLetter - 65 + offset) % 26 + 65);
      output[i] = String.fromCharCode(stringResult);
    }
    result = output.join("");
    return result;
  },

 decode(offset, string) {
    let output = [];
    let result = "";
    for (let i = 0; i < string.length; i++) {
     let asciiLetter = string.charCodeAt(i);
     let stringResult = ((asciiLetter + 65 - offset) % 26 + 65);
     output[i] = String.fromCharCode(stringResult);
    }
    result = output.join("");
    return result;
  }
};

export default cipher;

  