package tn.esprit.springproject.controlleurs;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import tn.esprit.springproject.repositories.DetailProjetRepository;
import tn.esprit.springproject.services.IDetailProjetService;
import tn.esprit.springproject.entities.DetailProjet;
import tn.esprit.springproject.services.IProjetService;

import java.util.List;

@RestController
@AllArgsConstructor
public class DetailProjetController {
    IDetailProjetService detailprojetService;

    @PostMapping("/addDetailProjet")
    DetailProjet addDetailProjet(@RequestBody DetailProjet detailprojet){
        return detailprojetService.addDetailProjet(detailprojet);
    }
    @GetMapping("/DetailProjet/{id}")
    DetailProjet retrieveDetailProjet(@PathVariable Long id){
        return detailprojetService.getDetailProjet(id);
    }
    @GetMapping("/DetailProjet")
    List<DetailProjet> retrieveDetailProjet(){
        return detailprojetService.getAllDetailProjet();
    }
    @DeleteMapping("/DetailProjet/{id}")
    void deleteDetailProjet(@PathVariable Long id){
        detailprojetService.deleteDetailProjet(id);
    }
    @PutMapping("/updateDetailProjet")
    DetailProjet updateDetailProjet(@RequestBody DetailProjet detailprojet){
        return detailprojetService.updateDetailProjet(detailprojet);
    }
}
