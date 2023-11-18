package tn.esprit.springproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springproject.entities.Universite;
import tn.esprit.springproject.repositories.FoyerRepository;
import tn.esprit.springproject.repositories.UniversiteRepository;

import java.util.List;

@Service
public class UniversiteServiceImpl implements IUniversiteService{
    UniversiteRepository universiteRepository;
    FoyerRepository foyerRepository;
    @Autowired
    public UniversiteServiceImpl(UniversiteRepository universiteRepository){
        this.universiteRepository=universiteRepository;
    }
    public UniversiteServiceImpl(UniversiteRepository universiteRepository,FoyerRepository foyerRepository){
        this.universiteRepository=universiteRepository;
        this.foyerRepository=foyerRepository;
    }
    @Override
    public Universite addUniversite(Universite universite) {
        return universiteRepository.save(universite);
    }

    @Override
    public List<Universite> getAllUniversites() {
        return (List<Universite>) universiteRepository.findAll();
    }

    @Override
    public Universite getUniversite(Long idUniversite) {
        return universiteRepository.findById(idUniversite).orElse(null);
    }

    @Override
    public void deleteUniversite(Long idUniversite) {
        universiteRepository.deleteById(idUniversite);
    }

    @Override
    public Universite updateUniversite(Universite universite) {
        return universiteRepository.save(universite);
    }
}
