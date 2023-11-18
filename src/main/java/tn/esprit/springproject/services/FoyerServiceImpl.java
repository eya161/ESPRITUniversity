package tn.esprit.springproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.repositories.FoyerRepository;
import tn.esprit.springproject.repositories.ReservationRepository;

import java.util.List;

@Service
public class FoyerServiceImpl implements IFoyerService{
    FoyerRepository foyerRepository;
    ReservationRepository reservationRepository;
    @Autowired
    public FoyerServiceImpl(FoyerRepository foyerRepository){
        this.foyerRepository=foyerRepository;
    }
    public FoyerServiceImpl(FoyerRepository foyerRepository, ReservationRepository reservationRepository){
        this.foyerRepository=foyerRepository;
        this.reservationRepository=reservationRepository;
    }
    @Override
    public Foyer addFoyer(Foyer foyer) {
        return foyerRepository.save(foyer);
    }

    @Override
    public List<Foyer> getAllFoyers() {
        return (List<Foyer>) foyerRepository.findAll();
    }

    @Override
    public Foyer getFoyer(Long idFoyer) {
        return foyerRepository.findById(idFoyer).orElse(null);
    }

    @Override
    public void deleteFoyer(Long idFoyer) {
        foyerRepository.deleteById(idFoyer);
    }

    @Override
    public Foyer updateFoyer(Foyer foyer) {

        return foyerRepository.save(foyer);
    }
}
