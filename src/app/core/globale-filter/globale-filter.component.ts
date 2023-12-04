import { Component, OnInit } from '@angular/core';
import { VilleService } from '../manage-ville/ville.service';
import { UniversiteService } from '../manage-university/universite.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-globale-filter',
  templateUrl: './globale-filter.component.html',
  styleUrls: ['./globale-filter.component.css'],
  animations: [
    trigger('spin', [
      state('spin', style({ transform: 'rotate(360deg)' })),
      transition('* => spin', animate('1000ms linear')),
    ]),
  ],
})

export class GlobaleFilterComponent implements OnInit {

  ville:any;
  universites:any;
  departements:any;
  selectedVille:any;
  selectedUniv:any;
  selectedDept:any;
  univSelectDisabled=true;
  buttonDisabled=true;
  deptSelectDisabled=true;
  idVille:any;

  filtrers  : any[]= [];
  constructor(private villeService:VilleService,private universiteServiceService:UniversiteService){}
  ngOnInit(): void {
this.villeService.getAllVilles().subscribe(res=>this.ville=res);

/*this.universiteServiceService.GetUniversiteById().subscribe(data=>this.universites=data)*/
  }

  filtrer(){
    console.log('Selected Ville:', this.selectedVille);
    console.log('Selected Universite:', this.selectedUniv);
    console.log('Selected Departement:', this.selectedDept);
    if(this.selectedUniv == undefined){ this.selectedUniv = 0;}
    if(this.selectedDept == undefined){ this.selectedDept = 0;}
   this.universiteServiceService.getDataByFiltre(this.selectedVille,this.selectedUniv,this.selectedDept).subscribe(
    res=>
    {this.filtrers=res;
      console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",res);  
    
    
    });
  }
  getUniversiteVille(idVille:any){
    this.universiteServiceService.getUniversiteByVille(idVille).subscribe(res=>{
console.log(res)
      this.universites=res;

      console.log('Updated Universites:', this.universites);


    })


  }
  getDepartementUniversite(idUniversite:any){
    this.universiteServiceService.getDepartementsByUniversite(idUniversite).subscribe(res=>{
console.log("ddddddddddddddddddddd",res)
      this.departements=res;

      console.log('Updated Universites:', this.universites);


    })


  }
  onVilleSelectChange() {
    // Enable the universite select and disable the departement select and the button

    /*this.deptSelectDisabled = true;
    this.buttonDisabled = true;*/
    if (this.selectedVille) {
      this.univSelectDisabled = false;
      this.getUniversiteVille(this.selectedVille);
    }


  }

  onUnivSelectChange() {
    // Enable the departement select and disable the button
    this.deptSelectDisabled = false;
    this.buttonDisabled = true;
    if (this.selectedUniv) {
      this.getDepartementUniversite(this.selectedUniv);
    }
  }

  onDeptSelectChange() {
    // Enable the button when both ville, universite, and departement are selected
    this.buttonDisabled = !(this.selectedVille && this.selectedUniv && this.selectedDept);

  }
  annuler(){
    this.selectedVille = null;
    this.selectedUniv=null;
    this.selectedDept=null;
    this.filtrers=[];

  }
}
