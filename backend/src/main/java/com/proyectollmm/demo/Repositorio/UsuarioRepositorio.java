package com.proyectollmm.demo.Repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyectollmm.demo.Modelo.Usuario;


@Repository
public interface UsuarioRepositorio  extends JpaRepository <Usuario, Integer>{
    
}
