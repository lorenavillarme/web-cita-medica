package com.proyectollmm.demo.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.proyectollmm.demo.Modelo.Usuario;
import com.proyectollmm.demo.Repositorio.UsuarioRepositorio;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200/")
public class UsuarioController {
    @Autowired
    private UsuarioRepositorio repositorio;

    @GetMapping("/usuarios")
    public List<Usuario> listaUsuarios(){
        return repositorio.findAll();
    }

    //método para guardar un usuario
    @PostMapping("/usuarios")
    public Usuario guardarUsuario (@RequestBody Usuario usuario){
        return repositorio.save(usuario);
    }

    //método para buscar usuario por id
    @GetMapping("/usuarios/{usuarioId}")
    public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Integer usuarioId) {
        Usuario usuario = repositorio.findById(usuarioId)
            .orElseThrow(()-> new NoSuchElementException("No se encuentra el usuario con la id " + usuarioId));
            return ResponseEntity.ok(usuario);
    }

    //método para borrar el usuario por id
    @DeleteMapping("/usuarios/{usuarioId}")
    public ResponseEntity<Map<String,Boolean>> borrarUsuario(@PathVariable Integer usuarioId){
        Usuario usuario = repositorio.findById(usuarioId)
            .orElseThrow(()-> new NoSuchElementException("No se encuentra el usuario con la id " + usuarioId));
            repositorio.delete(usuario);
            Map<String,Boolean> respuesta = new HashMap<>();
            respuesta.put("borrar",Boolean.TRUE);
            return ResponseEntity.ok(respuesta);
    }

    //este método sirve para actualixar usuario
    @PutMapping("/usuarios/{usuarioId}")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Integer usuarioId, @RequestBody Usuario detalleUsuario){
    Usuario usuario = repositorio.findById(usuarioId)
    .orElseThrow(() -> new NoSuchElementException("No se encuentra el usuario con la id "+ usuarioId));

    usuario.setUsuarioNombre(detalleUsuario.getUsuarioNombre());
    usuario.setUsuarioApellido(detalleUsuario.getUsuarioApellido());
    // usuario.setusuario_seguros(detalleUsuario.getusuario_seguros());
   

    Usuario usuarioActualizado = repositorio.save(usuario);
    return ResponseEntity.ok(usuarioActualizado);
}

}