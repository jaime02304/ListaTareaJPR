import { TareaNueva } from '../Modelos/tarea-nueva';
import { Component, inject } from '@angular/core';
import { TareaServiciosService } from '../servicios/tarea-servicios.service';
import { FormsModule } from '@angular/forms';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-aniadir-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aniadir-tarea.component.html',
  styleUrl: './aniadir-tarea.component.css',
})
export class AniadirTareaComponent {
  //Injeccion del servicio de tareas
  tareaServiciosService = inject(TareaServiciosService);
  //Nueva tarea estructura predefinida
  tareaNueva: TareaNueva = {
    id: '',
    name: '',
    finalizada: false,
    eliminada: false,
    Detalles:'',
  };
  //Metodo que genera un id tipo nano desde la libreria nanoid
  private generarIdNanoid(): string {
    return nanoid();
  }

  //Metodo que crea lanza el aniadirTarea del servicio y la mete en el json
  unaNuevaTarea() {
    this.tareaNueva.id = this.generarIdNanoid(); // Genera un nuevo ID
    this.tareaServiciosService.aniadirTarea(this.tareaNueva).subscribe(
      (resp) => {
        console.log('Tarea añadida correctamente:', resp);
        //Limpia el formulario
        this.tareaNueva = {
          id: '',
          name: '',
          finalizada: false,
          eliminada: false,
          Detalles:'',
        };
      },
      (error) => {
        console.error('Error al añadir la tarea:', error);
      }
    );
  }
}
