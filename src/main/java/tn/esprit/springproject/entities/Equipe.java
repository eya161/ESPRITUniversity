package tn.esprit.springproject.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Equipe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
     int idEquipe;
    String nomEquipe;
    @Enumerated(EnumType.STRING)
    Niveau niveau;
    @OneToMany( mappedBy="equipe")
    private Set<DetailEquipe> DetailEquipes;
    @OneToMany( mappedBy="equipe")
    private Set<Projet> projets;

}
