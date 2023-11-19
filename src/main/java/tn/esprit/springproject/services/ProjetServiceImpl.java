package tn.esprit.springproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.entities.Projet;
import tn.esprit.springproject.repositories.FoyerRepository;
import tn.esprit.springproject.repositories.ProjetRepository;
import tn.esprit.springproject.repositories.ReservationRepository;

import java.util.List;

@Service
public class ProjetServiceImpl implements IProjetService  {
    ProjetRepository projetRepository;


    @Autowired
    public ProjetServiceImpl(ProjetRepository projetRepository){
        this.projetRepository=projetRepository;
    }

    @Override
    public Projet addProjet(Projet projet) {
        return projetRepository.save(projet);
    }

    @Override
    public List<Projet> getAllProjet() {
        return (List<Projet>) projetRepository.findAll();
    }

    @Override
    public Projet getProjet(Long idProjet) {
        return projetRepository.findById(idProjet).orElse(null);
    }

    @Override
    public void deleteProjet(Long idProjet) {
        projetRepository.deleteById(idProjet);
    }

    @Override
    public Projet updateProjet(Projet projet) {

        return projetRepository.save(projet);
    }
}
