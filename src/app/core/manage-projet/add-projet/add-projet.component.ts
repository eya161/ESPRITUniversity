import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from '../projet.service';
import { DetailProjetService } from '../../manage-DetailProjet/detail-projet.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css'],
})
export class AddProjetComponent {
  projetForm: FormGroup;
  constructor(
    private projetServiceService: ProjetService,
    private detailProjetService: DetailProjetService,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.projetForm = this.fb.group({
      nomProjet: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z]{3,}')],
      ],
     
    });
  }

  listU: any;
  detailProjet: any;
  idDetail: any;
  dateDebutPValue: Date = new Date(); // Initialize with the current date or any default date value
  dateFinPValue: Date = new Date();
  ngOnInit(): void {
    this.getAllDeatilProjet();
  }

  getAllDeatilProjet() {
    this.detailProjetService.getAllDetails().subscribe((res) => {
      this.listU = res;
    });
  }

  getAllProjets() {
    this.projetServiceService
      .getAllProjets()
      .subscribe((res) => (this.listU = res));
  }

  validateDateOrder(): boolean {
    if (this.dateDebutPValue && this.dateFinPValue) {
      if (this.dateDebutPValue > this.dateFinPValue) {
        return false; // Les dates sont invalides
      }
    }
    return true; // Les dates sont valides
  }

  addProj(data: any) {
    if (!this.validateDateOrder()) {
      window.alert(
        'La date de fin du projet ne peut pas être antérieure à la date de début du projet.'
      );
      return; // Arrêter l'ajout du projet
    }

    console.log('idDetail:', this.idDetail);
    this.projetServiceService.addProj(data, this.idDetail).subscribe((data) => {
      console.log('rrrrrrrrrr', data);
      window.alert('Votre projet a été ajouté !');
      this.route.navigate(['/projet/show']);
    });
  }
}
