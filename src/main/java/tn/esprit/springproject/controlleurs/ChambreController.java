package tn.esprit.springproject.controlleurs;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.services.IChambreService;

import java.util.List;

@RestController
@AllArgsConstructor
public class ChambreController {
    IChambreService chambreService;
    @PostMapping("/addchambre")
    Chambre addChambre(@RequestBody Chambre chambre){ return chambreService.addChambre(chambre);}
    @GetMapping("/chambre/{id}")
    Chambre retrieveChambre(@PathVariable Long id){
        return chambreService.getChambre(id);
    }
    @GetMapping("/chambre")
    List<Chambre> retrieveChambres(){return chambreService.getAllChambres();}
    @DeleteMapping("/chambre/{id}")
    void deleteChambre(@PathVariable Long id){
        chambreService.deleteChambre(id);
    }
    @PutMapping("/updatechambre")
    Chambre updateChambre(@RequestBody Chambre chambre){
        return chambreService.updateChambre(chambre);
    }
}
