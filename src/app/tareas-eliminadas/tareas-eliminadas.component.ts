import { Component, inject, OnInit } from '@angular/core';
import { TareaServiciosService } from '../servicios/tarea-servicios.service';
import { TareasDetallesComponent } from '../tareas-detalles/tareas-detalles.component';
import { RouterModule } from '@angular/router';
import { TareaNueva } from '../Modelos/tarea-nueva';

@Component({
  selector: 'app-tareas-eliminadas',
  standalone: true,
  imports: [TareasDetallesComponent, RouterModule],
  templateUrl: './tareas-eliminadas.component.html',
  styleUrl: './tareas-eliminadas.component.css',
})
export class TareasEliminadasComponent implements OnInit {
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

  borrarCache(tarea: TareaNueva): void {
    this.tareaServiciosService.borrarCacheTarea(tarea.id).subscribe(
      (resp: any) => {
        console.log(resp);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
