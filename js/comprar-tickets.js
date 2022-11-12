const TICKET=200;
const nombre= document.querySelector("#nombre");
const apellido= document.getElementById("apellido");
const email= document.querySelector("#mail");
const cantidad= document.querySelector("#cantidadTickets");
const categoria= document.querySelector("#categoriaSelect");
const btnClear= document.querySelector("#btnClear");
const btnResumen=document.querySelector("#btnResumen");

let totalPago = document.querySelector("#totalPago");

//borrar datos

function limpiarRegistros(){
    nombre.value="";
    apellido.value="";
    email.value="";
    cantidad.value="";
    categoria.value="";
    totalPago.textContent="";

}

//para calcular descuento 
const ESTUDIANTE= 0.8;
const TRAINEE= 0.5;
const JUNIOR = 0.15;

function calcularDescuento(){
    switch (categoria.value){
        case "0":
            return 0;
        case "1":
            return ESTUDIANTE;
        case "2":
            return TRAINEE;
        case "3":
            return JUNIOR;
        default:
            break;
    }
}

//para emitir resumen
btnResumen.addEventListener("click",calcularMonto);

function calcularMonto(){
    totalPago.textContent= (TICKET- (TICKET*calcularDescuento()))*cantidad.value;
}

