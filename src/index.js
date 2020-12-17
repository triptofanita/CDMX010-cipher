import cipher from './cipher.js'


const string = document.getElementById('name-refugee')
//const stringResult = document.getElementById('clave-refugee')
const buttonEncode = document.getElementById('encode')
const buttonDecode = document.getElementById('decode')
//const stringResult = document.getElementById('result-refugee').toUpperCase();
const offset = Number.parseInt(document.getElementById('offset'))
let output = [];

buttonEncode.addEventListener('click', encode);
function encode () {
    document.getElementById('name-refugee').value;
    output = cipher.enconde(string,offset);
    document.getElementById('result-refugee').value.toUpperCase();
    document.getElementById('result-refugee').textContent = output.join('');
};
 
buttonDecode.addEventListener('click', decode);
function decode () {
    document.getElementById('clave-refugee').value;
    output = cipher.decode(string,offset);
    document.getElementById('result-refugee').value.toUpperCase();
    document.getElementById('result-refugee').textContent = output.join('');
};

window.encode = encode
window.decode = decode