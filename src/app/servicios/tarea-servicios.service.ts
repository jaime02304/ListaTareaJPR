import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TareaNueva } from '../Modelos/tarea-nueva';

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
  //Eliminar una tarea por su nombre
  eliminarTareas(name: string, tarea: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${name}`, tarea);
  }
  //Finalizar una tarea por su nombre
  finalizarTareas(name: string, tarea: any): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${name}`, tarea);
  }
}
