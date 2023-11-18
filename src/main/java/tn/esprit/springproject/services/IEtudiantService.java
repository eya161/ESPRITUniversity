package tn.esprit.springproject.services;

import tn.esprit.springproject.entities.Etudiant;

import java.util.List;

public interface IEtudiantService {
    Etudiant addEtudiant(Etudiant etudiant);
    List<Etudiant> getAllEtudiants();
    Etudiant getEtudiant(Long idEtudiant);
    void deleteEtudiant(Long idEtudiant);
    Etudiant updateEtudiant(Etudiant etudiant);
}
