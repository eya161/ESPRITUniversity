import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Ville } from 'src/app/model/ville';
import { VilleService } from '../ville.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-ville',
  templateUrl: './update-ville.component.html',
  styleUrls: ['./update-ville.component.css']
})
export class UpdateVilleComponent implements OnInit ,OnChanges  {
  /* ville:Ville | undefined;
   currentVille: Ville = new Ville();
 
   constructor(private villeService: VilleService, private router: Router, private route: ActivatedRoute) { }
 
   ngOnInit(): void {
     this.GetVilleByID(this.route.snapshot.params['id']);
   }
 
   editVille() {
     this.villeService.editVille(this.currentVille).subscribe(data => {
       if (data) {
         window.alert('Votre ville a été modifiée !');
         this.router.navigate(['/ville/show/']);
       }
     });
   }
 
   GetVilleByID(idVille: any) {
     this.villeService.GetVilleById(idVille).subscribe(data => {
       this.currentVille = data;
     });
   }*/
 
   @Input() ville: any;
 
   @Output() changeState = new EventEmitter<any>();
 
   currentVille: Ville = new Ville();
 
 
   constructor(private villeService: VilleService, private router: Router, private route: ActivatedRoute) { }
   ngOnChanges(changes: SimpleChanges): void {
 
   }
 
   ngOnInit(): void {
     console.log(this.ville)
     ///this.GetVilleByID(this.route.snapshot.params['id']);
   }
 
   editVille() {
     console.log("tt",this.ville)
     this.villeService.editVille(this.ville).subscribe(data => {
       if (data) {
         window.alert('Votre ville a été modifiée !');
         this.changeState.emit();
         /*this.updateVilleEvent.emit(this.currentVille); // Emitting the updated Ville*/
      /*   this.router.navigate(['/ville/show/']);*/
    /*  window.location.reload();*/
 
       }
     });
   }
 
   GetVilleByID(idVille: any) {
     this.villeService.GetVilleById(idVille).subscribe(data => {
       this.currentVille = data;
     });
   }
}
