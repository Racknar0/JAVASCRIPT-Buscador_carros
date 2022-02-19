// Variables
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");

//contenedor resultados
const resultado = document.querySelector("#resultado");

const max = new Date().getFullYear();
const min = max - 10;

//generar objeto con la busqueda
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//Eventos

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(); //Mostrar Autos al cargar

  //Llena opciones de años
  llenarSelect();
});

//event listeners para los select de busqueda
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  console.log(datosBusqueda);

  filtrarAuto();
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = e.target.value;
  console.log(datosBusqueda);
});

minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
});

color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
});

//Funciones
function mostrarAutos() {
  autos.forEach((auto) => {
    const autoHTML = document.createElement("P");

    const { marca, modelo, year, puertas, transmision, precio, color } = auto; //destructuring

    autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        
        `;

    //insertar en html
    resultado.appendChild(autoHTML);
  });
}

//genera los años del select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  } //agregar opciones de año al select
}

// Funcion de alto nivel que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca); 

    console.log(resultado);
}

function filtrarMarca(auto){
    if (datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}