// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/model/projet';
import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { PageEvent } from 'ngx-pagination';

@Component({
  selector: 'app-show-projet',
  templateUrl: './show-projet.component.html',
  styleUrls: ['./show-projet.component.css'],
})
export class ShowProjetComponent implements OnInit {
  pageChanged($event: Event) {
    throw new Error('Method not implemented.');
  }
  ProjetFilter: string = '';
  filterCriteria: any = {};
  listU: any;
  idProjet: any;
  Projet!: Projet;
  closeResult!: string;
  currentProjet: any = null;
  form: boolean = false;
  page: number = 1;
  pageSize: number = 5;
  // Added ProjetFilter property
  nomProjet = '';

  constructor(
    private ProjetServiceService: ProjetService,
    private r: Router,
    private ac: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllProjets();
  }

  getAllProjets() {
    this.ProjetServiceService.getAllProjets().subscribe(
      (res) => (this.listU = res)
    );
  }

  delete(i: any) {
    this.listU.splice(i, 1);
  }

  deleteProjet(idProjet: any, i: any) {
    this.idProjet = this.ac.snapshot.params['idProjet'];
    this.ProjetServiceService.deleteProj(idProjet).subscribe();
    window.alert('Votre projet a été supprimée !');
    this.delete(i);
  }

  getProjetById(idProjet: any) {
    this.ProjetServiceService.GetProjetById(idProjet).subscribe();
  }

  editProjet() {
    this.r.navigate(['editprojet']);
  }

  deleteP(id: number): void {
    this.ProjetServiceService.deleteProj(id).subscribe((data) => {
      alert('projet Supprime avec success! ');
      this.ProjetServiceService.getAllProjets();
    });
  }

  cancel() {
    this.form = false;
  }

  filterProjet(): void {
    this.filterCriteria = {
      nomProjet: this.ProjetFilter,
      // Ajoutez d'autres critères ici selon les besoins (dureeProjet, typeProjet, etc.)
    };

    this.ProjetServiceService.filterProjets(this.filterCriteria).subscribe(
      (filteredProjets) => {
        this.listU = filteredProjets;
      },
      (error) => {
        console.error('Error filtering projects:', error);
      }
    );
  }

  pdf() {
    console.log('Export to PDF function called');
    this.ProjetServiceService.getPDF().subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'projets.pdf'; // Update the filename
        link.click();
        URL.revokeObjectURL(url);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
