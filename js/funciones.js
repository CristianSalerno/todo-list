//pintar las tareas que tengo
var seccionTareas = document.querySelector('#tareas');
var numeroTareas = listaTareas.length;

//pintar las tareas por pantalla dentro del Article.
function pintarTareas(pLista) {
    var contenido = "";
    for (tarea of pLista) {
        contenido += `<article class="${tarea.prioridad}" data-id="${tarea.id}">
					     <h2>${tarea.titulo}</h2>
					     <a href="#" title="Eliminar" onclick="borrarTarea(${tarea.id});">Eliminar</a>
				     </article>`;
    }

    seccionTareas.innerHTML = contenido;
}

pintarTareas(listaTareas);

//guardar tareas en el Obj
function guardarTarea(pTitulo, pPrioridad) {
    numeroTareas++;
    var nuevaTarea = {
        id: numeroTareas,
        titulo: pTitulo,
        prioridad: pPrioridad
    }
    console.log(nuevaTarea);
    listaTareas.push(nuevaTarea); //Guarda la tarea
    return nuevaTarea; //Devuelve la tarea 
}

//filtrar por prioridades (Urgente, Diaria, Mensual)
function filtrarPrioridad(pLista, pPrioridad) {
    var listaFiltrada = new Array();

    listaFiltrada = pLista.filter(function (tarea) {
        return tarea.prioridad == pPrioridad;
    })

    return listaFiltrada;
}

//Buscar por tareas 
function buscarporTarea(pLista, pPalabraBuscar) {
    var listaFiltrada = new Array();

    listaFiltrada = pLista.filter(function (tarea) {
        return tarea.titulo.toLowerCase().includes(pPalabraBuscar.toLowerCase());
    })
    return listaFiltrada;
}

//Eliminar las tareas agregadas 
function borrarTarea(pId) {

    var tareaBorrada = listaTareas.find(function (tarea) {
        return tarea.id == pId;
    })

    var idTarea = listaTareas.indexOf(tareaBorrada);

    listaTareas.splice(idTarea, 1);

    var elementoBorrar = document.querySelector("[data-id='" + pId + "']");
    elementoBorrar.parentNode.removeChild(elementoBorrar);

}

//Pintar una sola tarea.
function pintarUnaTarea(pObjetoTarea) {
    //Crear el elementos con createElement
    var enlaceBorrar = document.createElement('a');
    var textoEliminar = document.createTextNode('Eliminar')
    enlaceBorrar.appendChild(textoEliminar);

    enlaceBorrar.title = 'Eliminar';
    enlaceBorrar.href = '#';
    enlaceBorrar.setAttribute('onclick', 'borrarTarea(' + pObjetoTarea.id + ')');

    var tituloTarea = document.createElement('h2')
    tituloTarea.innerText = pObjetoTarea.titulo;

    var tarea = document.createElement('article');
    tarea.className = pObjetoTarea.prioridad;
    tarea.dataset.id = pObjetoTarea.id;

    tarea.appendChild(tituloTarea);
    tarea.appendChild(enlaceBorrar);

    seccionTareas.appendChild(tarea);
}