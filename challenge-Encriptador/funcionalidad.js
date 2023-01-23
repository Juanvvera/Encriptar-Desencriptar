function init(){
    //variables
    
    var text= document.getElementById("textoEntradajs").value;
   //alert(text);
}

/*function copiar() {
    var contenido = document.querySelector("texto2");
    contenido.ariaSelected();
    document.execCommand("copy");
    document.
}*/

function encriptar(){
   
    var text = document.getElementById("textoEntradajs").value.toLowerCase();
    //letra i s eusa para mayuculas y minusculas
    //letra g es para tod lalinea y horacion
    //letra m es para multiples lineas o parrafos
    

    var textCifrado = text.replace(/e/igm,"enter");
    var textCifrado = textCifrado.replace(/o/igm,"ober");
    var textCifrado = textCifrado.replace(/i/igm,"imex");
    var textCifrado = textCifrado.replace(/a/igm,"ai");
    var textCifrado = textCifrado.replace(/u/igm,"ufat");
    

    document.getElementById("banner-Muñeco").style.display = "none";
    document.getElementById("mensajeError").style.display = "none";
    document.getElementById("texto").innerHTML = textCifrado;
    document.getElementById("copiart").style.display = "show";
    document.getElementById("copiart").style.display = "inherit";

}

function desencriptar(){
    
    var text = document.getElementById("textoEntradajs").value.toLowerCase();
    //letra i s eusa para mayuculas y minusculas
    //letra g es para tod lalinea y horacion
    //letra m es para multiples lineas o parrafos

    var textCifrado = text.replace(/enter/igm,"e");
    var textCifrado = textCifrado.replace(/ober/igm,"o");
    var textCifrado = textCifrado.replace(/imex/igm,"i");
    var textCifrado = textCifrado.replace(/ai/igm,"a");
    var textCifrado = textCifrado.replace(/ufat/igm,"u");

    document.getElementById("banner-Muñeco").style.display = "none";
    document.getElementById("mensajeError").style.display = "none";
    document.getElementById("texto").innerHTML = textCifrado;
    document.getElementById("copiart").style.display = "show";
    document.getElementById("copiart").style.display = "inherit";

}

function copy(){
    var captado = document.querySelector("#texto");
   
   //document.execCommand("selectAll");
    captado.select();
    document.execCommand("copy");
    alert("! Copiado !");
  
}

