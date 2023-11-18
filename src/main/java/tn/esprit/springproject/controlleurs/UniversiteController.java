package tn.esprit.springproject.controlleurs;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Universite;
import tn.esprit.springproject.services.IUniversiteService;

import java.util.List;

@RestController
@AllArgsConstructor
public class UniversiteController {
    IUniversiteService universiteService;
    @PostMapping("/addUniversite")
    Universite addUniversite(@RequestBody Universite universite){
        return universiteService.addUniversite(universite);
    }
    @GetMapping("/universite/{id}")
    Universite retrieveUniversite(@PathVariable Long id){
        return universiteService.getUniversite(id);
    }
    @GetMapping("/universite")
    List<Universite> retrieveUniversites(){
        return universiteService.getAllUniversites();
    }
    @DeleteMapping("/universite/{id}")
    void deleteUniversite(@PathVariable Long id){
        universiteService.deleteUniversite(id);
    }
    @PutMapping("/updateuniversite")
    Universite updateUniversite(@RequestBody Universite universite){
        return universiteService.updateUniversite(universite);
    }

}
