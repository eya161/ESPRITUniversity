package tn.esprit.springproject.controlleurs;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Reservation;
import tn.esprit.springproject.services.IReservationService;

import java.util.List;

@RestController
@AllArgsConstructor
public class ReservationController {
    IReservationService reservationService;
    @PostMapping("/addreservation")
    Reservation addReservation(@RequestBody Reservation reservation){
        return reservationService.addReservation(reservation);
    }
    @GetMapping("/reservation/{id}")
    Reservation retrieveReservation(@PathVariable Long id){
        return reservationService.getReservation(id);
    }
    @GetMapping("/reservation")
    List<Reservation> retrieveReservations(){
        return reservationService.getAllReservations();
    }
    @DeleteMapping("/reservation/{id}")
    void deleteReservation(@PathVariable Long id){
        reservationService.deleteReservation(id);
    }
    @PutMapping("/updatereservation")
    Reservation updateReservation(@RequestBody Reservation reservation){
        return reservationService.updateReservation(reservation);
    }

}
