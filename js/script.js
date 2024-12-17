console.log("Hola!! esta es mi primer entrega de JavaScript :)");

// Clase para representar un recuerdo
class Recuerdo {
    constructor(id, dia, mes, año, descripcion, mensaje) {
        this.id = id;
        this.dia = dia;
        this.mes = mes;
        this.año = año;
        this.descripcion = descripcion;
        this.mensaje = mensaje;
    }

    verRecuerdo() {
        console.log(
            `ID: ${this.id} | Fecha: ${this.dia}/${this.mes}/${this.año} | Descripción: ${this.descripcion}`
        );
    }
}

// Array de recuerdos
const recuerdos = [
    new Recuerdo(1, 2, 6, 2005, "Un día especial en el parque.", "Siempre recordaré esa caminata juntos."),
    new Recuerdo(2, 5, 9, 2011, "Viaje a la playa con amigos.", "El sonido de las olas fue inolvidable."),
    new Recuerdo(3, 7, 11, 2013, "Primera caminata en la montaña.", "Ese fue el día en el que vencimos nuestros miedos."),
    new Recuerdo(4, 31, 12, 2015, "Celebración de año nuevo.", "El mejor inicio de año!!."),
    new Recuerdo(5, 1, 1, 2016, "Comienzo de un año inolvidable.", "Prometimos que sería un año lleno de aventuras.")
];

// Función para seleccionar recuerdos
function seleccionRecuerdos() {
    const seleccion = [];
    let seguirEligiendo = true;

    // Mostrar los recuerdos en consola
    console.log("Recuerdos disponibles:");
    for (const recuerdo of recuerdos) {
        recuerdo.verRecuerdo();
    }

    // Bucle para seleccionar recuerdos
    while (seguirEligiendo) {
        let eleccion = parseInt(prompt("Selecciona un ID del recuerdo que quieras ver (1-5):"));
        const recuerdoEncontrado = recuerdos.find((r) => r.id === eleccion);

        if (recuerdoEncontrado) {
            seleccion.push(recuerdoEncontrado);
            alert(`Se agregara el recuerdo: ${recuerdoEncontrado.descripcion}`);
        } else {
            alert("Por favor, ingrese un ID valido");
        }

        // Preguntar si quiere seguir seleccionando recuerdos
        seguirEligiendo = confirm("¿Quieres agregar otro recuerdo?");
    }
    return seleccion;
}

// Función para mostrar detalles de los recuerdos seleccionados
function mostrarDetallesRecuerdos(seleccion) {
    if (seleccion.length > 0) {
        console.log("Recuerdos seleccionados:");
        seleccion.forEach((recuerdo) => {
            console.log(
                `ID: ${recuerdo.id} | Fecha: ${recuerdo.dia}/${recuerdo.mes}/${recuerdo.año} | Descripción: ${recuerdo.descripcion}`
            );
            alert(`El recuerdo se agrego exitosamente\nDescripción: ${recuerdo.descripcion}\nMensaje: ${recuerdo.mensaje}\nFecha del recuerdo: ${recuerdo.dia}/${recuerdo.mes}/${recuerdo.año}`);
            
        });
    } else {
        alert("No seleccionaste ningún recuerdo.");
    }
}

// Llamado de funciones
const seleccion = seleccionRecuerdos();
mostrarDetallesRecuerdos(seleccion);
