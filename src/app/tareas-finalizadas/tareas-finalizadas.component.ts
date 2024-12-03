import { Component, inject, OnInit } from '@angular/core';
import { TareaServiciosService } from '../servicios/tarea-servicios.service';
import { TareasDetallesComponent } from '../tareas-detalles/tareas-detalles.component';
import { RouterModule } from '@angular/router';
import { TareaNueva } from '../Modelos/tarea-nueva';

@Component({
  selector: 'app-tareas-finalizadas',
  standalone: true,
  imports: [TareasDetallesComponent, RouterModule],
  templateUrl: './tareas-finalizadas.component.html',
  styleUrl: './tareas-finalizadas.component.css',
})
export class TareasFinalizadasComponent implements OnInit {
  //Injectar el servicio
  private tareaServiciosService = inject(TareaServiciosService);
  //Donde se guardan todas las tareas
  tareas: any[] = [];
  //se ejecuta cuando se inicia la pagina
  ngOnInit(): void {
    this.mostrar();
  }
  mostrar(): void {
    //Coge el leer todas las tareas del servicio y las guarda en el arra de tareas
    this.tareaServiciosService.leerTareas().subscribe(
      (resp: any) => {
        this.tareas = resp;
        console.log(this.tareas);
      },
      (error) => {
        console.error('Error al obtener las tarea:', error);
      }
    );
  }
  //Metodo que manda las tareas fin alizadas a tareas eliminadas
  eliminarTareas(tarea: TareaNueva) {
    tarea.eliminada = true;
    this.tareaServiciosService
      .eliminarTareas(tarea.id, tarea)
      .subscribe((resp: any) => {
        console.log(resp);
        this.mostrar();
      });
  }
}
