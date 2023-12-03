import { Component } from '@angular/core';
import { Images } from 'src/app/model/images';
import { Universite } from 'src/app/model/universite';
import { UniversiteService } from '../universite.service';
import { Router } from '@angular/router';
import { VilleService } from '../../manage-ville/ville.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent {
  constructor(private universiteServiceService:UniversiteService , private route : Router,private villeService:VilleService) { }

  // form: FormGroup;
  listU: any ;
  ville:any
  selectedVille :any;
  page:number=1;
  pagesize:number=5;
  totalItmes:number=1;
  isLoading = false;
 
  file: Images[] = [];
  universite: Universite = new Universite(); // define an empty Event object
  mediaList: Images = new Images(); // define an empty array of Media objects
  selectedFiles: File[] = [];
 
  ngOnInit(): void {console.log("res")
 this.villeService.getAllVilles().subscribe(res=>this.ville =res)
  }
  onFileSelected(event:any): void {
    this.selectedFiles = event.target.files;
  }
 
  getAllUniversities(){
 
    this.universiteServiceService.getAllUnivs().subscribe(res => this.listU = res)
  }
 
 
  addUniv(UNI: any){
 /* console.log(this.selectedVille)
    this.universiteServiceService.addUniv(UNI  ,this.selectedVille).subscribe(data => {
      window.alert('Votre université a été ajoutée !');
      this.route.navigate(['/universite/show']);
    });*/
 
  }
 
 
  onSubmit(univForm: NgForm) {
    const formData = new FormData();
    formData.append('nomUniversite', univForm.value.nomUniversite);
    formData.append('adresse', univForm.value.adresse);
    formData.append('mail', univForm.value.mail);
    formData.append('numero', univForm.value.numero);
 
    // Ajoutez chaque fichier de la liste à FormData avec la clé 'files'
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('file', this.selectedFiles[i]);
    }
    this.isLoading = true;
    this.universiteServiceService.addUniv(formData, this.selectedVille, this.mediaList).subscribe(
      (response) => {
        console.log('Claim added successfully!', response);
        // Ajoutez tout code supplémentaire pour gérer le succès ici
        univForm.reset(); // Réinitialisez le formulaire après une soumission réussie
        this.universite = new Universite(); // Réinitialisez l'objet Universite
        this.mediaList = new Images(); // Réinitialisez la liste des médias
          // Ajoutez l'alerte
      window.alert('Votre université a été ajoutée !');
      this.isLoading = false;
      // Redirection
      this.route.navigate(['/universite/show']);
      },
      (error) => {
        console.log('Error adding universite: ', error);
        this.isLoading = false;
        // Ajoutez tout code supplémentaire pour gérer l'erreur ici
      }
    );}
}
