package tn.esprit.springproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import tn.esprit.springproject.entities.Chambre;

public interface ChambreRepository extends JpaRepository<Chambre,Long> {
}
