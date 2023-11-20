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
  private apiUrl:string = this.endpoint + "api/Tarea/getTasks";

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getTasks(): Observable<Tarea[]> {
    const token = this.loginService.getToken();
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get<Tarea[]>(this.apiUrl, { headers });
  }
  
}
