import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  tipoDocumento = '';
  documento = '';
  nombre = '';
  apellido = '';
  correo = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  onRegister() {
    const user = {
      tipoDocumento: this.tipoDocumento,
      documento: this.documento,
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      password: this.password
    };

    this.authService.register(user).subscribe(
      res => {
        // Dado que el servidor devuelve JSON, podemos acceder a res.message
        alert(res.message); // Mostrar el mensaje de éxito
        console.log('Usuario registrado exitosamente', res);

        // Redirigir al login después del registro exitoso
        this.router.navigate(['/login']);
      },
      err => {
        // Mostrar alert en caso de error real
        alert('Hubo un error al registrar el usuario');
        console.error('Error al registrar usuario', err);
      }
    );
  }
}
