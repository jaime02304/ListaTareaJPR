import { TareaServiciosService } from './../servicios/tarea-servicios.service';
import { Component, inject, OnInit } from '@angular/core';
import { TareaNueva } from '../Modelos/tarea-nueva';
import { TareasDetallesComponent } from '../tareas-detalles/tareas-detalles.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mostrar-tareas',
  standalone: true,
  imports: [TareasDetallesComponent,RouterModule],
  templateUrl: './mostrar-tareas.component.html',
  styleUrl: './mostrar-tareas.component.css',
})
export class MostrarTareasComponent implements OnInit {
  //Injectar el servicio
  private tareaServiciosService = inject(TareaServiciosService);
  //Donde se guardan todas las tareas
  tareas: any[] = [];
  //se ejecuta cuando se inicia la pagina
  ngOnInit(): void {
   this.mostrar();
  }

  mostrar():void{
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

  eliminarTareas(tarea: TareaNueva) {
    tarea.eliminada = true;
    this.tareaServiciosService
      .eliminarTareas(tarea.name, tarea)
      .subscribe((resp: any) => {
        console.log(resp);
      });
  }

  finalizarTareas(tarea: TareaNueva) {
    tarea.finalizada = true;
    this.tareaServiciosService
      .finalizarTareas(tarea.name, tarea)
      .subscribe((resp: any) => {
        console.log(resp);
      });
  }
}
