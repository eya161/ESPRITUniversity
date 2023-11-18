package tn.esprit.springproject.services;

import tn.esprit.springproject.entities.Reservation;

import java.util.List;

public interface IReservationService {
    Reservation addReservation(Reservation reservation);
    List<Reservation> getAllReservations();
    Reservation getReservation(Long idReservation);
    void deleteReservation(Long idReservation);
    Reservation updateReservation(Reservation reservation);
}
