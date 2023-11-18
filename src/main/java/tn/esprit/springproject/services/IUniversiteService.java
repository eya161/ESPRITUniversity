package tn.esprit.springproject.services;

import tn.esprit.springproject.entities.Universite;

import java.util.List;

public interface IUniversiteService {
    Universite addUniversite(Universite universite);
    List<Universite> getAllUniversites();
    Universite getUniversite(Long idUniversite);
    void deleteUniversite(Long idUniversite);
    Universite updateUniversite(Universite universite);
}
