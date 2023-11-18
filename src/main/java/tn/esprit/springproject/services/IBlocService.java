package tn.esprit.springproject.services;

import tn.esprit.springproject.entities.Bloc;

import java.util.List;

public interface IBlocService {
    Bloc addBloc(Bloc bloc);
    List<Bloc>getAllBlocs();
    Bloc getBloc(Long idBloc);
    void deleteBloc(Long idBloc);
    Bloc updateBloc(Bloc bloc);
}
