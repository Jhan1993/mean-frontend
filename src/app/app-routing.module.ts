import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },  // Ruta principal para el login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },  // Ruta para el registro
  { path: 'dashboard', component: DashboardComponent }, // Ruta para el dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
