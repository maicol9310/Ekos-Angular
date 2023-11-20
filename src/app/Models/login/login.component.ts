import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title = 'Ekos-Angular';

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService,private router: Router, private snackBar: MatSnackBar) {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { correo, contraseña } = this.loginForm.value;
      this.loginService.authenticate(correo, contraseña).subscribe(
        response => {
          // Verifica si la respuesta es exitosa (código 200)
          if (response && response.token) {
            this.router.navigate(['main-task']);
          } else {
            // Muestra un mensaje de error si la respuesta no es como se esperaba
            this.snackBar.open('Los datos son incorrectos', 'Cerrar', {
              duration: 3000, // Duración del mensaje en milisegundos
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
          }
        },
        error => {
          // Manejar el error (por ejemplo, mostrar un mensaje de error)
          console.error('Error al autenticar:', error);
        }
      );
    }
  }
}