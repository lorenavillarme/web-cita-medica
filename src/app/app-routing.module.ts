import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
const routes: Routes = [
  {path: 'usuarios', component:ListaUsuariosComponent},
  {path: 'registrar-usuario', component:RegistrarUsuarioComponent},
  {path: 'actualizar-usuario/:id', component:ActualizarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
