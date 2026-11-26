//Juan Leonel Bojorquez Teran 262766
// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
    { nombre: "Ir a la playa", prioridad: 1, completada: false },
    { nombre: "Estudiar JS", prioridad: 2, completada: true },
    { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
/*
En esta funcion hacemos un for en el cual iteramos en la lista
y comparamos que el completado sea verdadero y lo guardamos en una
variable estado y al final imprimi el nombre y el estado de cada tarea.
*/
function mostrarTareas(lista) {
    for (let i = 0; i < lista.length; i++) {
        if(lista[i].completada === true) {
            estado = "Completada";
        }
        else {
            estado = "Pendiente";
        }
        console.log(lista[i].nombre + " - " + estado);

    }
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
/*
En esta funcion aplicamos un filter en la lista inicial
lo que hace el filter es crear otra lista que mete las tareas
que estan completadas si se cumple la condicion tarea.completada == true.
*/
const obtenerCompletadas = (lista) => {
    return lista.filter((tarea) => tarea.completada == true);
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
/*
En esta funcion aplicamos un filter en la lista inicial
lo que hace el filter es crear otra lista que mete las tareas
que estan no completadas si se cumple la condicion tarea.completada == false.
*/
const obtenerPendientes = (lista) => {
    return lista.filter((tarea) => tarea.completada == false);
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
/*
En esta funcion nos ayuda a recorrer la lista
y de cada tarea sacar su nombre
*/
const obtenerNombres = (lista) => {
    return lista.map((tarea) => tarea.nombre);
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
/*
Devolvemos el tamaño de la lista
*/
function contarTareas(lista) {
    return lista.length;
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/
/*
Este objeto lo que hace es que recibe la lista de tareas y con el this
manda esa lista a los metodos que necesitan la lista
*/
const sistema = {
    tareas: tareas,

    mostrarTareas: function() {
        mostrarTareas(this.tareas);
    },

    mostrarCompletadas: function() {
        console.log(obtenerCompletadas(this.tareas));
    },

    mostrarPendientes: function() {
        console.log(obtenerPendientes(this.tareas));
    }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/
/*
Aqui validamos si la lista esta vacia o si ya todas las tareas fueron completadas
mediante la funcion de obtener los pendientes y muestra un mensaje
*/
function tarea(lista) {
    if(lista.length === 0){
        return console.log("No hay tareas");
    }
    if(obtenerPendientes(lista).length === 0){
        return console.log("Todas las tareas completadas");
    }
}


// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/
/*
Aqui guarde todo el switch en una funcion y lo que hace el switch es que recibe un numero
el cual nos indica lo que se ejecutara segun lo que esté en cada case
*/
const opcion = 1;
function ejercicio8(opcion) {
    switch (opcion) {
        case 1:
            sistema.mostrarTareas();
            break;

        case 2:
            sistema.mostrarCompletadas();
            break;

        case 3:
            sistema.mostrarPendientes();
            break;

        default:
            console.log("Opción inválida");
    }
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

console.log("Ejercicio 1 ");
mostrarTareas(tareas);

console.log("Ejercicio 2 ");
console.log(obtenerCompletadas(tareas));

console.log("Ejercicio 3 ");
console.log(obtenerPendientes(tareas));

console.log("Ejercicio 4 ");
console.log(obtenerNombres(tareas));

console.log("Ejercicio 5 ");
console.log(contarTareas(tareas));

console.log("Ejercicio 6 ");
sistema.mostrarTareas();
sistema.mostrarCompletadas();
sistema.mostrarPendientes();

console.log("Ejercicio 7 ");
const prueba = [];
tarea(prueba);

console.log("Ejercicio 8 ");
ejercicio8(2);