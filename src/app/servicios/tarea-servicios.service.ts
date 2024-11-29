import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareaServiciosService {

  constructor(private httpClient: HttpClient) {}
 

  leerTareas(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/ListaTareas') as Observable<any>;
  }

  aniadirTarea(){
    //return this.tareas.push(tarea);
  }

  moatrarListaBorrada() {
   
  }

  mostrarListaTerminada() {
  
  }
}
