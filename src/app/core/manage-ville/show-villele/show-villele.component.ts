import { Component, OnInit } from '@angular/core';
import { Ville } from 'src/app/model/ville';
import { VilleService } from '../ville.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-villele',
  templateUrl: './show-villele.component.html',
  styleUrls: ['./show-villele.component.css']
})
export class ShowVilleleComponent implements  OnInit {
  /* page!:number;
 pagesize!:number
 totalItmes!:number;*/
  listV: any;
  listFoyerByVille : any;
   idVille : any
   ville !: Ville;
   closeResult !: string;
   public _villeFilter:string='';
   public filteredVilles :any;
 
   page:number=1;
   pageSize: number = 5;
   pageChanged($event: Event) {
     throw new Error('Method not implemented.');
     }
   constructor(private villeService: VilleService,private r: Router,private ac: ActivatedRoute) { }
   ngOnInit(): void {
     this.getAllVilles();
     this.filteredVilles=this.listV;
     }
   public get villeFilter():string{
     return this._villeFilter;
   }
 
   public set villeFilter(filter:string){
     this._villeFilter = filter;
     this.filteredVilles = this.villeFilter ? this.filterVille(this.villeFilter) : this.listV;
   }
 
   getAllVilles(){
     /*let queryParam:any={};
     queryParam.page=this.page-1;
     queryParam.size=this.pagesize;*/
     this.villeService.getAllVilles().subscribe(res=>{
       this.listV=res
     }
 )
     this.villeService.countFoyerByville().subscribe(res=>{
       this.listFoyerByVille=res
     })
 
        }
        delete(i:any){
         this.listV.splice(i,1);
       }
       deleteVille( idVille : any , i:any){
         this.idVille=this.ac.snapshot.params['idUniversite'];
         this.villeService.deleteVille(idVille).subscribe();
         window.alert('Votre ville a été supprimée !');
         this.delete(i);
       }
       //5alaha
       GetVilleById(idVille: any){
 
       this.villeService.GetVilleById(idVille).subscribe();
 
     }
   public filterVille(criteria:string):Ville[]{
     criteria = criteria.toLowerCase();
 
     if (criteria === '') {
       this.ngOnInit();
     } else {
       this.listV = this.listV.filter(
         (ville: Ville) => ville.nom.toLowerCase().match(criteria)
       );
     }
 
     return this.listV;
   }
   //////
   selectedVille!: Ville;
   editingVille: Ville | null = null;
   editMode=false;
   showEditForm(v:any) {
     this.editMode=true;
      // Créez une copie de l'objet v
     this.selectedVille = { ...v };
    // this.selectedVille=v;
 
 
  // Create a copy to avoid modifying the original object
   }
   changeState(){
     console.log( "ggghghgh")
     this.editMode=false;
     this.getAllVilles()
 
   }
 
 
 
}
