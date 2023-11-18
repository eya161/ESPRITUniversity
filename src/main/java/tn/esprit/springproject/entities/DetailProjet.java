package tn.esprit.springproject.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DetailProjet implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idDetail;
    String descriptionDetail;
    Date dateDebut;
    String technologie;
    @ManyToOne
    Projet projet;
}
