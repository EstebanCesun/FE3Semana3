import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<any[]>;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks().pipe(
      // Transformar el array completo
      map(tasks =>
        tasks
          .filter(task => task.completed) // Filtrar tareas completadas
          .map(task => ({ ...task, name: task.name.toUpperCase() })) // Transformar nombres
      )
    );
  }
}
