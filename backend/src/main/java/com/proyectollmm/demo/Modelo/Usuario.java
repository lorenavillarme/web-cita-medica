package com.proyectollmm.demo.Modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="usuario_id")
    private int usuarioId;
    @Column(name="usuario_nombre", length = 30, nullable = false)
    private String usuarioNombre;
    @Column(name="usuario_apellido", length = 30, nullable = false)
    private String usuarioApellido;
    @Column(name="usuario_dni", length = 9, nullable = false)
    private String usuarioDni;
    @Column(name="usuario_telefono", length = 9, nullable = false)
    private int usuarioTelefono;
    
    @Column(name="usuario_email", length = 60, nullable = false)
    private String usuarioEmail;
    @Column(name="usuario_contrasenia", length = 60, nullable = false)
    private String usuarioContrasenia;

    // @ManyToOne
    // @JoinColumn(name="usuario_seguros")
    // private SegurosMedicos usuarioSeguros;


//getters
    public int getUsuarioId() {
        return this.usuarioId;
    }

    public String getUsuarioNombre() {
        return this.usuarioNombre;
    }

    public String getUsuarioApellido() {
        return this.usuarioApellido;
    }

    public String getUsuarioDni() {
        return this.usuarioDni;
    }

    public int getUsuarioTelefono() {
        return this.usuarioTelefono;
    }

    // public SegurosMedicos getusuario_seguros() {
    //     return seguros;
    // }

    public String getUsuarioEmail() {
        return this.usuarioEmail;
    }

    public String getUsuarioContrasenia() {
        return this.usuarioContrasenia;
    }


//setters
    public void setUsuarioId(int usuarioId) {
        this.usuarioId = usuarioId;
    }

    public void setUsuarioNombre(String usuarioNombre) {
        this.usuarioNombre = usuarioNombre;
    }

    public void setUsuarioApellido(String usuarioApellido) {
        this.usuarioApellido = usuarioApellido;
    }
    public void setUsuarioDni(String usuarioDni) {
        this.usuarioDni = usuarioDni;
    }

    public void setUsuarioTelefono(int usuarioTelefono) {
        this.usuarioTelefono = usuarioTelefono;
    }

    // public void setusuario_seguros(SegurosMedicos usuarioSeguros) {
    //     this.seguros = usuarioSeguros;
    // }

    public void setUsuarioEmail(String usuarioEmail) {
        this.usuarioEmail = usuarioEmail;
    }

    public void setUsuarioContrasenia(String usuarioContrasenia) {
        this.usuarioContrasenia = usuarioContrasenia;
    }
}
