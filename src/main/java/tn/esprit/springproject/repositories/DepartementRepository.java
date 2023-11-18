package tn.esprit.springproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.springproject.entities.Departement;

public interface DepartementRepository extends JpaRepository<Departement,Long> {
}
