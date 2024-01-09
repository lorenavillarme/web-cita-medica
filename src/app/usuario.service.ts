import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
//se agrega dps
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "http://localhost:8080/usuarios"

  constructor(private httpClient: HttpClient) { }
 //método para obtenr lista de usarios de la base de datsos
 obtenerListaUsuarios(): Observable<Usuario[]>{
  return this.httpClient.get<Usuario[]>(`${this.baseURL}`)
}

registrarUsuario(usuario : Usuario): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, usuario)
}

obtenerUsuarioPorId(usuarioId:number) : Observable<Object>{
  return this.httpClient.get<Usuario>(`${this.baseURL}/${usuarioId}`)
}

actualizarUsuario(usuarioId:number, usuario: Usuario) : Observable<Object>{
  return this.httpClient.put<Usuario>(`${this.baseURL}/${usuarioId}`, usuario);
}

borrarUsuario(usuarioId:number) : Observable<Object>{
  return this.httpClient.delete<Usuario>(`${this.baseURL}/${usuarioId}`)
}
}
