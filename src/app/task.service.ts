import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { id: 1, name: 'Comprar comida', completed: true },
    { id: 2, name: 'Limpiar la casa', completed: false },
    { id: 3, name: 'Leer un libro', completed: true },
    { id: 4, name: 'Hacer ejercicio', completed: false }
  ];

  getTasks(): Observable<any[]> {
    return of(this.tasks);
  }
}
