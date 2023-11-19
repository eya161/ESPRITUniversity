package tn.esprit.springproject.controlleurs;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import tn.esprit.springproject.entities.Projet;
import tn.esprit.springproject.services.IProjetService;

import java.util.List;

@RestController
@AllArgsConstructor
public class ProjetController {
    IProjetService projetService;
    @PostMapping("/addProjet")
    Projet addProjet(@RequestBody Projet projet){
        return projetService.addProjet(projet);
    }
    @GetMapping("/Projet/{id}")
    Projet retrieveProjet(@PathVariable Long id){
        return projetService.getProjet(id);
    }
    @GetMapping("/Projet")
    List<Projet> retrieveProjet(){
        return projetService.getAllProjet();
    }
    @DeleteMapping("/Projet/{id}")
    void deleteProjet(@PathVariable Long id){
        projetService.deleteProjet(id);
    }
    @PutMapping("/updateProjet")
    Projet updateProjet(@RequestBody Projet projet){
        return projetService.updateProjet(projet);
    }
}
