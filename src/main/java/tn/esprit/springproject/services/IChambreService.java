package tn.esprit.springproject.services;

import tn.esprit.springproject.entities.Chambre;

import java.util.List;

public interface IChambreService {
    Chambre addChambre(Chambre chambre);
    List<Chambre> getAllChambres();
    Chambre getChambre(Long idChambre);
    void deleteChambre(Long idChambre);
    Chambre updateChambre(Chambre chambre);

}
