package tn.esprit.springproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.entities.DetailProjet;

public interface DetailProjetRepository extends JpaRepository<DetailProjet,Long> {
}
