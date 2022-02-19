/************** ( '// Variables' ) **************/
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

/************** ( '//Eventos' ) **************/

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos); //Mostrar Autos al cargar

  //Llena opciones de años
  llenarSelect();
});

//event listeners para los select de busqueda
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  filtrarAuto();
});

year.addEventListener("change", (e) => {
  datosBusqueda.year = parseInt(e.target.value); //! convertir a number el string de año
  filtrarAuto();
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

/************** ( '//Funciones' ) **************/

function mostrarAutos(autos) {
  limpiarHtml(); //! elimina el html del document

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

//limpiar html
function limpiarHtml() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
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
function filtrarAuto() {
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

  mostrarAutos(resultado);
  /* console.log(resultado); */
}

//filtrar por propiedad
function filtrarMarca(auto) {
  if (datosBusqueda.marca) {
    return auto.marca === datosBusqueda.marca;
  }
  return auto;
}

function filtrarYear(auto) {
  if (datosBusqueda.year) {
    return auto.year === datosBusqueda.year;
  }
  return auto;
}
