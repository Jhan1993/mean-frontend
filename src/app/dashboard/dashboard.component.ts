import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.authService.getUsers().subscribe(
      (res: any) => {
        this.usuarios = res;
        console.log('Usuarios obtenidos:', this.usuarios);
      },
      (err) => {
        console.error('Error al obtener usuarios', err);
      }
    );
  }

  // Método para manejar la actualización del usuario
  actualizarUsuario(usuario: any) {
    this.authService.updateUser(usuario).subscribe(
      (res: any) => {
        alert('Usuario actualizado satisfactoriamente');
      },
      (err) => {
        console.error('Error al actualizar usuario', err);
      }
    );
  }
  // Método para cerrar sesión
  logout() {
    // Si tienes un token o algún dato almacenado en el localStorage, puedes limpiarlo aquí.
    // localStorage.removeItem('token'); // Ejemplo: eliminar un token de autenticación

    // Redirigir al usuario al formulario de login
    this.router.navigate(['/login']);
  }
}
