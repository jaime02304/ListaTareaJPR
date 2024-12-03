jsonServer estructura principal-->
listaTareasDB.json
{
"ListaTareas": [
{"id":"","name": "", "finalizada": false, "eliminada": false }
]
}

Descripción del proyecto:

El proyecto utiliza una base de datos JSON alojada en el archivo listaTareasDB.json, que será ejecutada antes de iniciar el servidor Angular con el comando ng serve.

Una vez iniciado, se mostrará una landing page con cuatro botones principales, cada uno utilizando routerLink para navegar entre las diferentes páginas. A continuación, se describe la funcionalidad de cada botón:

Añadir nuevas tareas
El primer botón, situado más a la izquierda, permite añadir nuevas tareas. Estas pueden ser tareas activas o ya finalizadas, por si alguna se olvidó de marcar en su momento.

Tareas activas
El segundo botón muestra todas las tareas activas. Cada tarea tendrá un par de botones para:

Finalizar: Cambiar el estado de la tarea a finalizada.
Eliminar: Cambiar el estado de la tarea a eliminada.
Tareas eliminadas
En esta sección se listan todas las tareas que se encuentran en estado "eliminado". Además, hay un botón en la parte inferior del listado que permite borrar de la base de datos (el JSON) todas las tareas eliminadas de forma permanente.

Tareas finalizadas
En esta página se muestra el listado de tareas marcadas como "finalizadas". Cada tarea tiene un botón para cambiar su estado a "eliminada", permitiendo posteriormente eliminarlas definitivamente de la base de datos.
