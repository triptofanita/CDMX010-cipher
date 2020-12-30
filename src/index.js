import cipher from './cipherprueba1.js'

const buttonEncode = document.getElementById('encode')
const buttonDecode = document.getElementById('decode')

let output = [];

buttonEncode.addEventListener('click', encodeListener);
    function encodeListener(){
        const stringName = (document.getElementById('name-refugee').value).toUpperCase();
        const offset = Number.parseInt(document.getElementById('offset').value)
        output = cipher.encode(offset, stringName);
        document.getElementById('result-refugee').textContent = output.join("");
    }

buttonDecode.addEventListener('click', decodeListener);
    function decodeListener(){
        const stringResult = (document.getElementById('clave-refugee').value).toUpperCase();
        const offset = Number.parseInt(document.getElementById('offset').value)
        output = cipher.decode(offset, stringResult);
        document.getElementById('result-refugee').textContent = output.join("");
    }

