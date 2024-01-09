import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{
  usuarios: Usuario[];

  constructor(private usuarioServicio: UsuarioService, private router : Router){

  }
  ngOnInit(): void {
    this.obtenerUsuarios();
    console.log(this.usuarios);
    console.log(this.usuarios.length);
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaUsuarios().subscribe(dato =>{
      this.usuarios = dato;
    });
  }

  actualizarUsuario(id : number){
    this.router.navigate(['actualizar-usuario', id])
  }

  borrarUsuario(id: number){
    this.usuarioServicio.borrarUsuario(id).subscribe(dato => {
      console.log(dato);
      this.obtenerUsuarios();
    })
  }
}
