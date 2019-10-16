var btnGuardar = document.querySelector('#guardar');
var inputGuardar = document.querySelector('#tituloTarea');
var selectGuardar = document.querySelector('#prioridad');

btnGuardar.addEventListener('click', capturarDatosGuardar);

//Evento del boton guardar una tarea.
function capturarDatosGuardar(event) {
    document.querySelector('#mensaje').innerText = ''
    var tituloGuardar = inputGuardar.value;
    var prioridadGuardar = selectGuardar.value;
    if (tituloGuardar != '' && prioridadGuardar != '') {
        var nuevaTarea = guardarTarea(tituloGuardar, prioridadGuardar);
        pintarUnaTarea(nuevaTarea);
    } else {
        document.querySelector('#mensaje').innerText = 'datos introducidos incorrectos'
    }
    inputGuardar.value = '';
    selectGuardar.value = '';
};

var seleccionarPrioridad = document.querySelector('#prioridadFilter');
seleccionarPrioridad.addEventListener('change', capturarPrioridad);

//Evento de capturar por prioridad
function capturarPrioridad(event) {
    var prioridad = event.target.value;
    if (prioridad != "") {
        var listaFiltrada = filtrarPrioridad(listaTareas, prioridad);
        pintarTareas(listaFiltrada);
    } else {
        pintarTareas(listaTareas);
    }
};


var campoBusqueda = document.getElementById('search');
campoBusqueda.addEventListener('keyup', recojerBusqueda) //Utilizo el evento keyup para el buscador.


function recojerBusqueda(event) {
    var palabra = event.target.value;
    var listaFiltrada = buscarporTarea(listaTareas, palabra);
    pintarTareas(listaFiltrada);
}

inputGuardar.addEventListener('focus', recargar);

function recargar(event) {
    event.target.value = '';
    inputGuardar.value = '';
    campoBusqueda.value = '';
    seleccionarPrioridad.value = '';
    pintarTareas(listaTareas);
}