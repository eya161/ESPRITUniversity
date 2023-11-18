package tn.esprit.springproject.controlleurs;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.services.IFoyerService;

import java.util.List;

@RestController
@AllArgsConstructor
public class FoyerController {
    IFoyerService foyerService;
    @PostMapping("/addFoyer")
    Foyer addFoyer(@RequestBody Foyer foyer){
        return foyerService.addFoyer(foyer);
    }
    @GetMapping("/foyer/{id}")
    Foyer retrieveFoyer(@PathVariable Long id){
        return foyerService.getFoyer(id);
    }
    @GetMapping("/foyer")
    List<Foyer> retrieveFoyers(){
        return foyerService.getAllFoyers();
    }
    @DeleteMapping("/foyer/{id}")
    void deleteFoyer(@PathVariable Long id){
        foyerService.deleteFoyer(id);
    }
    @PutMapping("/updatefoyer")
    Foyer updateFoyer(@RequestBody Foyer foyer){
        return foyerService.updateFoyer(foyer);
    }

}
