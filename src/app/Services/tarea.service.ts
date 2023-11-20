import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { LoginService } from './login.service';
import { Tarea } from '../Interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "api/Tarea";

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getTasks(): Observable<Tarea[]> {
    const token = this.loginService.getToken();
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Tarea[]>(`${this.apiUrl}/getTasks`, { headers });
  }

  createTask(nombre: string): Observable<Tarea> {
    const body = {nombre};
    const token = this.loginService.getToken();
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post<Tarea>(`${this.apiUrl}/createTask`, body, { headers });
  }

  updateTask(tareaId: number, isFinished: boolean): Observable<Tarea> {
    const body = {tareaId, isFinished};
    const token = this.loginService.getToken();
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.put<Tarea>(`${this.apiUrl}/updateTask/${tareaId}`, body, { headers });
  }

  deleteTask(tareaId: number): Observable<void> {
    const token = this.loginService.getToken();
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete<void>(`${this.apiUrl}/deleteTask/${tareaId}`, { headers });
  }
  
}
