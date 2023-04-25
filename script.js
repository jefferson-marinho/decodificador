var areaTexto = document.getElementById('areaTexto');
var btnCriptografar = document.getElementById('btn-criptografar');
var btnDescriptografar = document.getElementById('btn-descriptografar');
var btnCopiar = document.getElementById('btnCopiar');
var result = document.getElementById('containerResult');
var menu = document.getElementById('menu')
var estadoMenu = false
areaTexto.addEventListener('keypress', validatexto)

function validatexto (event){
    var regex = new RegExp("^[a-z \b\0]+$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);

    if (!regex.test(key)){
        event.preventDefault();
        atencao();
        return false;
    }
}

function atencao(){
    var texto = document.querySelector('article > textarea + p')
    texto.style.color = 'blue'
    sleep()
    texto.style.color = 'red'
    sleep()
    texto.style.color = ""
}
const timer = (seconds) =>  {
    let time = seconds
    return new Promise(res => setTimeout(res, time))
}
async function sleep() {
    var texto = document.querySelector('article > textarea + p') 
    for (var i = 0; i < 4; i++) {
        console.log(texto.style.color)
        await timer(100);
        texto.style.color = 'red'
        await timer(100);
        texto.style.color = ''
    }
}
function criptografar(){
    var textoCriptografado = "" ;
    var texto = areaTexto.value
    btnCopiar.hidden = false

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == 'a'){
            letra = "ai";
            textoCriptografado = textoCriptografado + letra;
        }else if (texto[i] == 'e'){
            letra = "enter";
            textoCriptografado = textoCriptografado + letra;
        }
        else if (texto[i] == 'i'){
            letra = "imes";
            textoCriptografado = textoCriptografado + letra;
        }
        else if (texto[i] == 'o'){
            letra = "ober";
            textoCriptografado = textoCriptografado + letra;
        }
        else if (texto[i] == 'u'){
            letra = "ufat";
            textoCriptografado = textoCriptografado + letra;
        }else{
            textoCriptografado = textoCriptografado + texto[i]
        }
        
    }
    result.innerHTML = codigohtml(textoCriptografado)
}
function descriptografar(){
    var texto = areaTexto.value;
    var textoDescriptografado = texto;
    var decodificar = true
    btnCopiar.hidden = false

    while (decodificar){
        if (textoDescriptografado.indexOf('ai') !== -1){
            var inicio = textoDescriptografado.indexOf('ai')
            var letra = 'a'
            textoDescriptografado = textoDescriptografado.slice(0, inicio) + letra + textoDescriptografado.slice(inicio + 2)
        }
        else if(textoDescriptografado.indexOf('enter') !== -1){
            var inicio = textoDescriptografado.indexOf('enter')
            var letra = 'e'
            textoDescriptografado = textoDescriptografado.slice(0, inicio) + letra + textoDescriptografado.slice(inicio + 5)
        }
        else if(textoDescriptografado.indexOf('imes') !== -1){
            var inicio = textoDescriptografado.indexOf('imes')
            var letra = 'i'
            textoDescriptografado = textoDescriptografado.slice(0, inicio) + letra + textoDescriptografado.slice(inicio + 4)
        }
        else if(textoDescriptografado.indexOf('ober') !== -1){
            var inicio = textoDescriptografado.indexOf('ober')
            var letra = 'o'
            textoDescriptografado = textoDescriptografado.slice(0, inicio) + letra + textoDescriptografado.slice(inicio + 4)
        }
        else if(textoDescriptografado.indexOf('ufat') !== -1){
            var inicio = textoDescriptografado.indexOf('ufat')
            var letra = 'u'
            textoDescriptografado = textoDescriptografado.slice(0, inicio) + letra + textoDescriptografado.slice(inicio + 4)
        }else {
            decodificar = false
        }
    }
result.innerHTML = codigohtml(textoDescriptografado)
}
function codigohtml(texto){
    var result = document.getElementById('btnCopiar').addEventListener('click', copiaResult)

    return '<textarea id="result">'+ texto +'</textarea>' 
}
function copiaResult(){
    document.getElementById('result').select();
    document.execCommand("copy");
}
function menuAbreFecha(){
    if (estadoMenu == false){
        estadoMenu = true
        menu.innerHTML = '<ul><li>LINKEDIN</li><li>GIT</li><li>EMAIL</li></ul>'
    }else{
        menu.innerHTML = '';
        estadoMenu = false
    }
}
btnCriptografar.onclick = criptografar
btnDescriptografar.onclick = descriptografar
btnCopiar.onclick = copiaResult
btnCopiar.hidden = true
