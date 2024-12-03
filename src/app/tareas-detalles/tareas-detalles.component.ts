import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TareaNueva } from '../Modelos/tarea-nueva';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tareas-detalles',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tareas-detalles.component.html',
  styleUrl: './tareas-detalles.component.css',
})
export class TareasDetallesComponent {
  //El padre da al hijo el objeto tarea
  @Input() tarea!: TareaNueva;
  //Evento que elimina la tarea(la cambia de tareas activas a tareas eliminadas)
  @Output() EliminarTarea = new EventEmitter<any>();
  //Evento que finaliza la tarea(la cambia de tareas activas a tareas finalizadas)
  @Output() FinalizarTarea = new EventEmitter<any>();
  //Se ejecuta el evento de eliminarTarea
  defTarea() {
    this.EliminarTarea.emit(this.tarea);
  }
  //Se ejecuta el evento de finalizar tarea
  finTarea() {
    this.FinalizarTarea.emit(this.tarea);
  }
}
