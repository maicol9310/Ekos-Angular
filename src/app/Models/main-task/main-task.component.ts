import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../Services/tarea.service';
import { Tarea } from '../../Interfaces/tarea';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {
  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  tareaSeleccionada: number | null = null;
  dataSource = new MatTableDataSource<Tarea>(this.tareas);

  constructor(private tareaService: TareaService) {}

  get tareasFiltradas(): Tarea[] {
    return this.tareaSeleccionada
      ? this.tareas.filter(tarea => tarea.id === this.tareaSeleccionada)
      : this.tareas;
  }

  cargarTareas() {
    this.tareaService.getTasks().subscribe(
      (tareas) => {
        this.tareas = tareas;
      },
      (error) => {
        console.error('Error al obtener las tareas:', error);
      }
    );
  }

  ngOnInit(): void {
    this.tareaSeleccionada = 0;
    this.cargarTareas();
  }

  eliminarTarea(tareaId: number): void {
    this.tareaService.deleteTask(tareaId).subscribe(
      () => {
        this.cargarTareas();
      },
      error => {
        console.error('Error al eliminar tarea:', error);
      }
    );
  }

  agregarTarea() {
    if (this.nuevaTarea) {
      this.tareaService.createTask(this.nuevaTarea).subscribe(nuevaTarea => {
        this.tareas.push(nuevaTarea);
        this.nuevaTarea = ''; 
        this.cargarTareas();
      });
    }
  }

  actualizarTarea(tareaId: number, isChecked: boolean): void {
    this.tareaService.updateTask(tareaId, isChecked).subscribe(actualizada => {
      this.cargarTareas();
    });
  }
}

