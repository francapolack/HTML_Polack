function verificaredad(){
    let nombre=document.getElementById("nombre").value;
    let edad=document.getElementById("edad").value;
    if (nombre==""){
        texto="No se puede recibir el formulario con datos faltantes";
    }else if (edad==""){
        texto="No se puede recibir el formulario con datos faltantes";
    }else{
        if (edad>=18){
        texto="El usuario tiene 18 o más años";
        }else{
            texto="El usuario tiene menos de 18 años";
        }
    }
    document.getElementById("validacion").innerText=texto;
    
}

