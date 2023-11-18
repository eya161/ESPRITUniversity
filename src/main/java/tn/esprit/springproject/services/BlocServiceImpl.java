package tn.esprit.springproject.services;

import lombok.RequiredArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springproject.entities.Bloc;
import tn.esprit.springproject.repositories.BlocRepository;
import tn.esprit.springproject.repositories.FoyerRepository;

import java.util.List;

@Service
//@RequiredArgsConstructor
public class BlocServiceImpl implements IBlocService{
    //@NotNull
    BlocRepository blocRepository;
    FoyerRepository foyerRepository;
    @Autowired
    public BlocServiceImpl(BlocRepository blocRepository){
        this.blocRepository=blocRepository;
    }
    public BlocServiceImpl(BlocRepository blocRepository,FoyerRepository foyerRepository){
        this.blocRepository=blocRepository;
        this.foyerRepository=foyerRepository;
    }
    @Override
    public Bloc addBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }

    @Override
    public List<Bloc> getAllBlocs() {
        return (List<Bloc>) blocRepository.findAll();
    }

    @Override
    public Bloc getBloc(Long idBloc) {
        return blocRepository.findById(idBloc).orElse(null);
    }

    @Override
    public void deleteBloc(Long idBloc) {
        blocRepository.deleteById(idBloc);

    }

    @Override
    public Bloc updateBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }
}
