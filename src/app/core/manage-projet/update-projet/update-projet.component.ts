import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'src/app/model/projet';

export enum Type {
  PFE = 'PFE',
  PIDEV = 'PIDEV',
  PFA = 'PFA',
}

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.css'],
})
export class UpdateProjetComponent implements OnInit {
  updateProjet = new FormGroup({
    nomProjet: new FormControl('', Validators.required),
  
    dureProjet: new FormControl('', Validators.required),
    typeProjet: new FormControl('', Validators.required),
    dateDebutP: new FormControl('', Validators.required),
    dateFinP: new FormControl('', Validators.required),
  });
 
  currentProjet: Projet = new Projet();

  constructor(
    private projetService: ProjetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projetService
      .GetProjetById(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.updateProjet.patchValue({
          nomProjet: data.nomProjet,
          dureProjet: data.dureProjet,
          typeProjet: data.typeProjet,
          dateDebutP: this.formatDate(data.dateDebutP),
          dateFinP: this.formatDate(data.dateFinP),
        });
      });
  }

  formatDate(date: string | null | undefined): string {
    return date ? new Date(date).toISOString().split('T')[0] : '';
  }

  editProjet() {
    this.currentProjet.nomProjet = this.updateProjet.value.nomProjet ?? '';
    this.currentProjet.dureProjet = this.updateProjet.value.dureProjet ?? '';

   this.currentProjet.typeProjet = this.updateProjet.value.typeProjet as Type;

    this.currentProjet.dateDebutP = new Date(
      this.updateProjet.value.dateDebutP as string
    );
   
    this.currentProjet.idProjet = this.route.snapshot.params['id'];

    this.projetService.editProjet(this.currentProjet).subscribe((data) => {
      if (data) {
        window.alert('Votre projet a été modifié !');
        this.router.navigate(['/projet/show/']);
      }
    });
  }
}
