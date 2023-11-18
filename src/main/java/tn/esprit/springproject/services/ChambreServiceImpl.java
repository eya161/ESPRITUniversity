package tn.esprit.springproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.repositories.BlocRepository;
import tn.esprit.springproject.repositories.ChambreRepository;

import java.util.List;

@Service
public class ChambreServiceImpl implements IChambreService{
    ChambreRepository chambreRepository;
    BlocRepository blocRepository;
    @Autowired
    public ChambreServiceImpl(ChambreRepository chambreRepository){
        this.chambreRepository=chambreRepository;
    }
    public ChambreServiceImpl(ChambreRepository chambreRepository,BlocRepository blocRepository){
        this.chambreRepository=chambreRepository;
        this.blocRepository=blocRepository;
    }
    @Override
    public Chambre addChambre(Chambre chambre) {

        return chambreRepository.save(chambre);
    }

    @Override
    public List<Chambre> getAllChambres() {

        return (List<Chambre>) chambreRepository.findAll();
    }

    @Override
    public Chambre getChambre(Long idChambre) {

        return chambreRepository.findById(idChambre).orElse((null));
    }

    @Override
    public void deleteChambre(Long idChambre) {
        chambreRepository.deleteById(idChambre);
    }

    @Override
    public Chambre updateChambre(Chambre chambre) {
        /*Chambre ch=chambreRepository.findById(chambre.getIdChambre()).orElse(null);
        if(ch!=null) {
            return chambreRepository.save(chambre);
        }else {
            return null;
        }*/
        return chambreRepository.save(chambre);
    }
}
