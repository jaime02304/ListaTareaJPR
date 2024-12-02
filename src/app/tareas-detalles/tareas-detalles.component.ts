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
  @Input() tarea!: TareaNueva;

  @Output() EliminarTarea = new EventEmitter<any>();

  @Output() FinalizarTarea = new EventEmitter<any>();

  defTarea() {
    this.EliminarTarea.emit();
  }

  finTarea() {
    this.FinalizarTarea.emit();
  }
}
