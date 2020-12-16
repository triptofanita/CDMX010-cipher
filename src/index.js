import cipher from './cipher.js'

const buttonEncode = document.getElementById('encode')
const string = document.getElementById('name-refugee')
const stringEncode = document.getElementById('result-refugee')
const offset = document.getElementById('offset')

buttonEncode.addEventListener('click', function() {
encodeResult = window.cipher.encode (offset.value, string.value)
});
 