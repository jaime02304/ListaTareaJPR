import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { TareaNueva } from '../Modelos/tarea-nueva';
import { RouterModule } from '@angular/router';
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { TareaServiciosService } from '../servicios/tarea-servicios.service';

@Component({
  selector: 'app-tareas-detalles',
  standalone: true,
  imports: [RouterModule, NgbDatepickerModule],
  templateUrl: './tareas-detalles.component.html',
  styleUrl: './tareas-detalles.component.css',
})
export class TareasDetallesComponent {
  //Injeccion del NgbModel
  private modalService = inject(NgbModal);
  //Injeccion del servicio de tareas
  private servicioTarea = inject(TareaServiciosService);

  closeResult = '';
  //El padre da al hijo el objeto tarea
  @Input() tarea!: TareaNueva;
  //Evento que elimina la tarea(la cambia de tareas activas a tareas eliminadas)
  @Output() EliminarTarea = new EventEmitter<any>();
  //Evento que finaliza la tarea(la cambia de tareas activas a tareas finalizadas)
  @Output() FinalizarTarea = new EventEmitter<any>();

  content!: TemplateRef<any>;
  //Se ejecuta el evento de eliminarTarea
  defTarea() {
    this.EliminarTarea.emit(this.tarea);
  }
  //Se ejecuta el evento de finalizar tarea
  finTarea() {
    this.FinalizarTarea.emit(this.tarea);
  }

  //metodo que se hace al clicar el nombre de la tarea
  open(content: TemplateRef<any>, id: string) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.tarea.Detalles = `${result}`;
          this.servicioTarea
            .modificarDetalles(id, this.tarea)
            .subscribe((resp: any) => {
              console.log(resp);
            });
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  //Metodo privado para controlar el error y las respuestas no realizadas (la cruz)
  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
