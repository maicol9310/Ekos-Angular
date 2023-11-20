import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string = '';
  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "api/Usuarios/login"

  constructor(private http: HttpClient) {}

  authenticate(correo: string, contraseña: string): Observable<any> {
    const credentials = { correo, contraseña };
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap((response) => {
        this.token = response.token;
      })
    );
  }

  getToken(): string {
    return this.token;
  }
}
