function obtenerVisitas(){
    var visitas = sessionStorage.getItem("visitas");
    if (visitas === null){
        return 0;
    } else {
        return parseInt(visitas);
    }
}

function incrementarVisitas(){
    debugger
    var visitas = obtenerVisitas();
    visitas++;
    sessionStorage.setItem("visitas",visitas.toString());
    document.getElementById("contador").innerHTML = visitas;
}

document.getElementById("contador").innerHTML= obtenerVisitas();

