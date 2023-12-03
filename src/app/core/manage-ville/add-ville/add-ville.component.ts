import { Component } from '@angular/core';
import { VilleService } from '../ville.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ville',
  templateUrl: './add-ville.component.html',
  styleUrls: ['./add-ville.component.css']
})
export class AddVilleComponent {
  constructor(private villeService:VilleService , private route : Router) { }
  listV: any ;
  ngOnInit(): void {
  }

  getAllVilles(){
    this.villeService.getAllVilles().subscribe(res => this.listV = res)
  }


  addVille(Ville: any){
    this.villeService.addVille(Ville).subscribe(data => {
      window.alert('Votre ville a été ajoutée !');
      this.route.navigate(['/ville/show']);
    });

}
}