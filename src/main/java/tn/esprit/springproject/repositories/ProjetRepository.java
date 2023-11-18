package tn.esprit.springproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.springproject.entities.Projet;

public interface ProjetRepository extends JpaRepository<Projet,Long> {
}
