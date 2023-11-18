package tn.esprit.springproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.springproject.entities.Classe;

public interface ClasseRepository extends JpaRepository<Classe,Long> {
}
