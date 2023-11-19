package tn.esprit.springproject.services;

import tn.esprit.springproject.entities.DetailProjet;

import java.util.List;

public interface IDetailProjetService {
    DetailProjet addDetailProjet(DetailProjet detailprojet);
    List<DetailProjet> getAllDetailProjet();
    DetailProjet getDetailProjet(Long idDetail);
    void deleteDetailProjet(Long idDetail);
    DetailProjet updateDetailProjet(DetailProjet detailprojet);
}
