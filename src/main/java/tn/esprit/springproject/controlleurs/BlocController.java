package tn.esprit.springproject.controlleurs;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Bloc;
import tn.esprit.springproject.services.BlocServiceImpl;
import tn.esprit.springproject.services.IBlocService;

import java.util.List;

@RestController
@AllArgsConstructor
public class BlocController {
    IBlocService blocService;
    @PostMapping("/addbloc")
    Bloc addBloc(@RequestBody Bloc bloc){
        return blocService.addBloc(bloc);
    }
    @GetMapping("/bloc/{id}")
    Bloc retrieveBloc(@PathVariable Long id){
        return blocService.getBloc(id);
    }
    @GetMapping("/bloc")
    List<Bloc> retrieveBlocs(){
        return blocService.getAllBlocs();
    }
    @DeleteMapping("/bloc/{id}")
    void deleteBloc(@PathVariable Long id){
        blocService.deleteBloc(id);
    }
    @PutMapping("/updatebloc")
    Bloc updateBloc(@RequestBody Bloc bloc){
        return blocService.updateBloc(bloc);
    }
}
