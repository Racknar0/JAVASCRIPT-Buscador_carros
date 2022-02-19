// Variables
const resultado = document.querySelector('#resultado');


//Eventos


document.addEventListener('DOMContentLoaded', () =>  {
    mostrarAutos();
});



//Funciones
function mostrarAutos(){
    autos.forEach(auto => {
        const autoHTML = document.createElement('P');

        const {marca, modelo, year, puertas, transmision, precio, color} = auto; //destructuring

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        
        `

        //insertar en html
        resultado.appendChild(autoHTML);
    });
}