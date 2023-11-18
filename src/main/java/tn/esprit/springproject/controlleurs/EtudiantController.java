package tn.esprit.springproject.controlleurs;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Etudiant;
import tn.esprit.springproject.services.IEtudiantService;

import java.util.List;

@RestController
@AllArgsConstructor
public class EtudiantController {
    IEtudiantService etudiantService;
    @PostMapping("/addetudiant")
    Etudiant addEtudiant(@RequestBody Etudiant etudiant){
        return etudiantService.addEtudiant(etudiant);
    }
    @GetMapping("/etudiant/{id}")
    Etudiant retrieveEtudiant(@PathVariable Long id){
        return etudiantService.getEtudiant(id);
    }
    @GetMapping("/etudiant")
    List<Etudiant> retrieveEtudiants(){
        return etudiantService.getAllEtudiants();
    }
    @DeleteMapping("/etudiant/{id}")
    void deleteEtudiant(@PathVariable Long id){
        etudiantService.deleteEtudiant(id);
    }
    @PutMapping("/updateEtudiant")
    Etudiant updateEtudiant(@RequestBody Etudiant etudiant){
        return etudiantService.updateEtudiant(etudiant);
    }

}
