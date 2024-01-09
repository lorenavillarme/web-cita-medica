import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit{
  ngOnInit(): void {
    const fecha = document.getElementById('fecha') as HTMLInputElement;
  
    let date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    fecha.setAttribute('min', `${year}-${month}-${day}`);
  }
  
  
usuario: Usuario = new Usuario();
constructor(private usuarioServicio: UsuarioService, private router: Router){
 
}



//selección de especialidad, da resultado a médico 
escogerEspecialidad(){
  const especialidad = document.getElementById('especialidad') as HTMLInputElement;
  let especialidadValor = especialidad.value;
  const medico = document.getElementById('medico') as HTMLElement;

  
  if (especialidadValor === 'cardiologia') {
    medico.innerHTML = ''; 
  
    const opcionMedico = document.createElement('option');
    opcionMedico.value = "Alexander Fleming";
    opcionMedico.textContent = "Alexander Fleming";
    medico.appendChild(opcionMedico);
  
    const opcionMedico2 = document.createElement('option');
    opcionMedico2.value = "Sir Joseph Lister";
    opcionMedico2.textContent = "Sir Joseph Lister";
    medico.appendChild(opcionMedico2);

  } else if (especialidadValor === 'pediatria') {
    medico.innerHTML = ''; 
  
    const opcionMedico = document.createElement('option');
    opcionMedico.value = "Gertrude Belle Elion";
    opcionMedico.textContent = "Gertrude Belle Elion";
    medico.appendChild(opcionMedico);
  
    const opcionMedico2 = document.createElement('option');
    opcionMedico2.value = "Florence Nightingale";
    opcionMedico2.textContent = "Florence Nightingale";
    medico.appendChild(opcionMedico2);

  } else if (especialidadValor === 'neurologia') {
    medico.innerHTML = ''; 
  
    const opcionMedico = document.createElement('option');
    opcionMedico.value = "John Snow";
    opcionMedico.textContent = "John Snow";
    medico.appendChild(opcionMedico);
  
    const opcionMedico2 = document.createElement('option');
    opcionMedico2.value = "Sigmund Freud";
    opcionMedico2.textContent = "Sigmund Freud";
    medico.appendChild(opcionMedico2);

  } else if (especialidadValor === 'hematologia') {
    medico.innerHTML = ''; 
  
    const opcionMedico = document.createElement('option');
    opcionMedico.value = "Paracelso";
    opcionMedico.textContent = "Paracelso";
    medico.appendChild(opcionMedico);
  
    const opcionMedico2 = document.createElement('option');
    opcionMedico2.value = "Marie Curie";
    opcionMedico2.textContent = "Marie Curie";
    medico.appendChild(opcionMedico2);

  } else if (especialidadValor === 'analisis') {
    medico.innerHTML = ''; 
  
    const opcionMedico = document.createElement('option');
    opcionMedico.value = "Margaret Sanger";
    opcionMedico.textContent = "Margaret Sanger";
    medico.appendChild(opcionMedico);
  
    const opcionMedico2 = document.createElement('option');
    opcionMedico2.value = "Edward Jenner";
    opcionMedico2.textContent = "Edward Jenner";
    medico.appendChild(opcionMedico2);

    const opcionMedico3 = document.createElement('option');
    opcionMedico3.value = "Johann Georg Faust";
    opcionMedico3.textContent = "Johann Georg Faust";
    medico.appendChild(opcionMedico3);
  
  } else {
    medico.innerHTML = ''; 
  }

}


guardarUsuario(){
  this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato =>{
    console.log(dato);
    this.iraListaUsuario();
  }, error => console.log(error))
}

iraListaUsuario(){
  this.router.navigate(['usuarios'])
}

onSubmit(){
  console.log(this.usuario)
  //comprobaciones de formulario

  const nombre = document.getElementById('nombre') as HTMLInputElement;
  const apellido = document.getElementById('apellido') as HTMLInputElement;
  const dni = document.getElementById('dni') as HTMLInputElement;
  const telefono = document.getElementById('telefono') as HTMLInputElement;
  const email = document.getElementById('email') as HTMLInputElement;
  const contrasenia = document.getElementById('contrasenia') as HTMLInputElement;
  const especialidad = document.getElementById('especialidad') as HTMLInputElement;
  const seguro = document.getElementById('seguro') as HTMLSelectElement;
  const fecha = document.getElementById('fecha') as HTMLInputElement;

  let nombreValor = nombre.value;
  let apellidoValor = apellido.value;
  let dniValor = dni.value;
  let telefonoValor = telefono.value;
  let emailValor = email.value;
  let contraseniaValor = contrasenia.value;
  let especialidadValor = especialidad.value;
  let seguroValor = seguro.value;
  let fechaValor = fecha.value;

  // Variable para seguir el estado de las comprobaciones
  let comprobacionesExitosas = true;

  // Comprobar campos vacíos
  if (nombreValor === "") {
    alert('Introduce tu nombre');
    comprobacionesExitosas = false;
  }

  if (apellidoValor === "") {
    alert('Introduce tu apellido');
    comprobacionesExitosas = false;
  }

  if (telefonoValor === "") {
    alert('Introduce tu teléfono');
    comprobacionesExitosas = false;
  }

  const formatoEmail = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
  if (emailValor === "") {
    alert('Introduce tu email');
    comprobacionesExitosas = false;
  } else if (!emailValor.match(formatoEmail)) {
    alert('Tu email no sigue el formato correcto');
    comprobacionesExitosas = false;
  }

  if (contraseniaValor === "") {
    alert('Introduce tu contraseña');
    comprobacionesExitosas = false;
  }

  // Comprobar DNI
  const formatoDNI = /^[0-9]{8}[A-Za-z]$/;
  if (dniValor === "") {
    alert('Introduce tu DNI');
    comprobacionesExitosas = false;
  } else if (!dniValor.match(formatoDNI)) {
    alert('Tu DNI no coincide con el formato');
    comprobacionesExitosas = false;
  }


  if (seguroValor === "") {
    alert('Escoge tu seguro, si no tienes, marca la opción correspondiente');
    comprobacionesExitosas = false;
  }

  if (especialidadValor === "") {
    alert('Escoge la especialidad');
    comprobacionesExitosas = false;
  }

  if (fechaValor === "") {
    alert('Escoge una fecha');
    comprobacionesExitosas = false;
  }

//crear código de identificación del paciente 
  if (comprobacionesExitosas) {
    const primeraLetraNombre = nombreValor.charAt(0).toUpperCase();
    const primeraLetraApellido = apellidoValor.charAt(0).toUpperCase();

    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const resultado = `Su código de identificación de cita es ${primeraLetraNombre}${primeraLetraApellido}${numeroAleatorio}`;
    alert(resultado); 
    this.guardarUsuario();
  }
}
}



