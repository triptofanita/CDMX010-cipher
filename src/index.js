import cipher from './cipher.js'

const buttonEncode = document.getElementById('encode')
const buttonDecode = document.getElementById('decode')

let output = [];

buttonEncode.addEventListener('click', encodeListener);
    function encodeListener(){
        const stringName = (document.getElementById('name-refugee').value).toUpperCase();
        const offset = Number.parseInt(document.getElementById('offset').value)
        output = cipher.encodeString(stringName, offset);
        document.getElementById('result-refugee').textContent = output.join('');
    }

buttonDecode.addEventListener('click', decodeListener);
    function decodeListener(){
        const stringResult = (document.getElementById('clave-refugee').value).toUpperCase();
        const offset = Number.parseInt(document.getElementById('offset').value)
        output = cipher.decodeString(stringResult, offset);
        document.getElementById('result-refugee').textContent = output.join('');
    }

