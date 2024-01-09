package com.proyectollmm.demo.Modelo;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;


@Entity
@Table(name = "seguros medicos")
public class SegurosMedicos {
    @Column(name="seguros_id", length = 11, nullable = false)
    private int segurosId;
    @Id
    @Column(name="seguros_compania", length = 30, nullable = false)
    private String segurosCompania;
    
    @OneToMany(mappedBy = "usuarioId")
    private List<Usuario> usuarios;


    //getters
    public int getseguros_id() {
        return segurosId;
    }

    public String getseguros_compania() {
        return segurosCompania;
    }

    //setters
    public void setseguros_id(int segurosId) {
        this.segurosId = segurosId;
    }

    public void setseguros_compania(String segurosCompania) {
        this.segurosCompania = segurosCompania;
    }
}
