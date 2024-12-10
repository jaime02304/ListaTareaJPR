import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareaServiciosService {
  private apiUrl = 'http://localhost:3000/ListaTareas';
  constructor(private httpClient: HttpClient) {}

  //Leer toda la base de datos
  leerTareas(): Observable<any> {
    return this.httpClient.get(this.apiUrl) as Observable<any>;
  }
  //Aladir una nueva tarea
  aniadirTarea(tarea: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, tarea);
  }
  //Eliminar una tarea por su id(cambia el elemento eliminada de tipo booleano)
  eliminarTareas(id: string, tarea: any): Observable<any> {
    return this.httpClient.put(
      `${this.apiUrl}/${id}`,
      tarea
    ) as Observable<any>;
  }
  //Finalizar una tarea por su id(cambia el elemento finalizada de tipo booleano)
  finalizarTareas(id: string, tarea: any): Observable<any> {
    return this.httpClient.put(
      `${this.apiUrl}/${id}`,
      tarea
    ) as Observable<any>;
  }
  //Borra la cache(base de datos) de las tareas eliminadas
  borrarCacheTarea(id: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`) as Observable<any>;
  }
  //Metodo con el que puedes modificar el detalle de la tarea
  modificarDetalles(id: string, tarea: any): Observable<any> {
    return this.httpClient.put(
      `${this.apiUrl}/${id}`,
      tarea
    ) as Observable<any>;
  }
}
