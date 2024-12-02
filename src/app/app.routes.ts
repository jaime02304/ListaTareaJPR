import { Routes } from '@angular/router';
import { AniadirTareaComponent } from './aniadir-tarea/aniadir-tarea.component';
import { TareasEliminadasComponent } from './tareas-eliminadas/tareas-eliminadas.component';
import { TareasFinalizadasComponent } from './tareas-finalizadas/tareas-finalizadas.component';
import { MostrarTareasComponent } from './mostrar-tareas/mostrar-tareas.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: 'aniadirTarea', component:AniadirTareaComponent},
  {path: 'tareaEliminadas', component:TareasEliminadasComponent},
  {path:'tareaFinalizadas', component:TareasFinalizadasComponent},
  {path:'mostrarTareas', component:MostrarTareasComponent}
];
