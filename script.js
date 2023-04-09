
function incrementarVisitas(){
    var visitas = obtenerVisitas();
    visitas++;
    sessionStorage.setItem("visitas",visitas.toString());
    document.getElementById("contador").innerHTML = visitas;
}

document.getElementById("contador").innerHTML= obtenerVisitas();

