import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

// Table
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';

// Controles de formulario
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button';
// Mensajes de alerta
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
// Iconos material
import {MatIconModule} from '@angular/material/icon';

// Cuadriculas
import {MatGridListModule} from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MainTaskComponent } from './Models/main-task/main-task.component';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './Models/login/login.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    MainTaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatExpansionModule,
    MatCheckboxModule, 
    FormsModule,   
    RouterModule.forRoot([

      {path:'',redirectTo:'login', pathMatch:'full'},
      { path: 'login', component: LoginComponent },
      { path: 'main-task', component: MainTaskComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }