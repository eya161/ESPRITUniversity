package tn.esprit.springproject.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Departement implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idDepartement;
    String nomDepartement;
    int nombre_classes;
    int nombre_detage;
    @ManyToOne
    Universite universite;
    @OneToMany( mappedBy="departement")
    private Set<Classe> classes;

}
