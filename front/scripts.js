const form = document.querySelector(".fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function mostrarform() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderform() {
    form.style.left = "-300px";
    form.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}