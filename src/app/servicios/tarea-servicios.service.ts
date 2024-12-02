import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareaServiciosService {
  private apiUrl = 'http://localhost:3000/ListaTareas';
  constructor(private httpClient: HttpClient) {}

  leerTareas(): Observable<any> {
    return this.httpClient.get(this.apiUrl) as Observable<any>;
  }

  aniadirTarea(tarea: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, tarea);
  }

  eliminarTareas(name:string ,tarea: any): Observable<any>{
    return this.httpClient.put(`${this.apiUrl}/${name}`,tarea);
  }
  finalizarTareas(name:string ,tarea: any): Observable<any>{
    return this.httpClient.put(`${this.apiUrl}/${name}`,tarea);
  }
}
