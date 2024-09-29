import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    const credentials = {
      correo: this.correo,
      password: this.password
    };

    this.authService.login(credentials).subscribe(
      res => {
        alert('Login exitoso');
        console.log('Login exitoso', res);

        // Redirigir al dashboard después de un login exitoso
        this.router.navigate(['/dashboard']);  // Cambio de redirección a dashboard
        
      },
      err => {
        alert('Error al iniciar sesión: ' + err.error.message);
        console.error('Error al iniciar sesión', err);
      }
    );
  }

  // Método para redirigir al formulario de registro
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
