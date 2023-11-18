package tn.esprit.springproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springproject.entities.Etudiant;
import tn.esprit.springproject.repositories.EtudiantRepository;
import tn.esprit.springproject.repositories.ReservationRepository;

import java.util.List;

@Service
public class EtudiantServiceImpl implements IEtudiantService{

    EtudiantRepository etudiantRepository;
    ReservationRepository reservationRepository;
    @Autowired
    public EtudiantServiceImpl(EtudiantRepository etudiantRepository){
        this.etudiantRepository=etudiantRepository;
    }
    public EtudiantServiceImpl(EtudiantRepository etudiantRepository,ReservationRepository reservationRepository){
        this.etudiantRepository=etudiantRepository;
        this.reservationRepository=reservationRepository;
    }
    @Override
    public Etudiant addEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    @Override
    public List<Etudiant> getAllEtudiants() {
        return (List<Etudiant>) etudiantRepository.findAll();
    }

    @Override
    public Etudiant getEtudiant(Long idEtudiant) {
        return etudiantRepository.findById(idEtudiant).orElse(null);
    }

    @Override
    public void deleteEtudiant(Long idEtudiant) {
        etudiantRepository.deleteById(idEtudiant);
    }

    @Override
    public Etudiant updateEtudiant(Etudiant etudiant) {

        return etudiantRepository.save(etudiant);
    }
}
