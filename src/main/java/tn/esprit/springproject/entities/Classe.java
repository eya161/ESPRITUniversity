package tn.esprit.springproject.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Classe  implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idClasse;
    String classeNom;
    long etage;
    long capacite;
    Boolean disponibilte;
    @ManyToOne
    Departement departement;

}

