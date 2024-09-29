import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000'; // URL del backend

  constructor(private http: HttpClient) { }

  // Método para el registro
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  // Método para el login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  // Método para obtener todos los usuarios
  getUsers(): Observable<any> {
  return this.http.get(`${this.baseUrl}/users`);
  }

  // Método para actualizar un usuario
  updateUser(usuario: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${usuario._id}`, usuario);
  }

}
