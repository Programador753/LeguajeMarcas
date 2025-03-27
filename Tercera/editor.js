function negrita(){
    window.document.execCommand('bold', false, null);
}
function cursiva(){
    window.document.execCommand('italic', false, null);
}
function subrayado(){
    window.document.execCommand('underline', false, null);
}
function alineai(){
    window.document.execCommand('justifyLeft', false, null);
}
function alinead(){
    window.document.execCommand('justifyRight', false, null);
}
function alineac(){
    window.document.execCommand('justifyCenter', false, null);
}
function alineaf(){
    window.document.execCommand('justifyFull', false, null);
}
function listano(){
    window.document.execCommand('insertUnorderedList', false, null);
}
function listao(){
    window.document.execCommand('insertOrderedList', false, null);
}
function subi(){
    window.document.execCommand('subscript', false, null);
}
function supi(){
    window.document.execCommand('superscript', false, null);
}
function fontcolor(){
    color = prompt("Ingrese el color que desea usar");
    window.document.execCommand('foreColor', false, color);

}
function backcolor(){
    color = prompt("Ingrese el color que desea usar");
    window.document.execCommand('backColor', false, color);

}
function insertarimg(){
    var img = prompt("Ingrese la URL de la imagen");
    window.document.execCommand('insertImage', false, img);
    
}

function hipervinculo(){
    var url = prompt("Introduce la URL: ", "http://");
    window.document.execCommand('createLink', false, url);
    
}

function publicar(){
    var cont = document.getElementById("contenido").innerHTML;
    document.getElementById("Mensajes").innerHTML = cont;
}