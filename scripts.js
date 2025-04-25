const form = document.querySelector(".fale-conosco")
const mascara =document.querySelector(".mascara-formulario")

function mostrarform(){
    
    
    form.style.left ="50%"
    form.style.fransform = "translatex(-50%)"
    mascara.style.visibility="visible"
}

function esconderform(){
    form.style.left ="-300px"
    form.style.fransform = "translatex(0)"
    mascara.style.visibility="hidden"

}