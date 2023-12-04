import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/model/bloc';
import { BlocsService } from '../../manage-bloc/blocs.service';
import { Foyer } from 'src/app/model/foyer';
import { FoyerService } from '../foyer.service';

@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.css']
})
export class UpdateFoyerComponent implements OnInit {
 
  updateFoyer = new FormGroup({
    nomFoyer: new FormControl('', Validators.required),
    capaciteFoyer: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  })
  currentFoyer: Foyer = new Foyer();
  constructor(private foyerService: FoyerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //call wserviice pour recupere le univarsite by id
    this.foyerService.getFoyerById(this.route.snapshot.params['id']).subscribe(data => {
      this.updateFoyer.patchValue({
        nomFoyer: data.nomFoyer,
        capaciteFoyer: data.capaciteFoyer,
        image: data.image
      });
      console.log("entre", data.nomFoyer)


    })



  }
  editFoyer() {
    // Update the currentUniversite.nomUniversite with a default value if it's null or undefined
    this.currentFoyer.nomFoyer = this.updateFoyer.value.nomFoyer ?? '';
    // Update the currentUniversite.nomUniversite with a default value if it's null or undefined
    this.currentFoyer.capaciteFoyer = Number(this.updateFoyer.value.capaciteFoyer) ?? 0;
    this.currentFoyer.idFoyer = this.route.snapshot.params['id'];
    this.foyerService.updateFoyer(this.currentFoyer).subscribe(
      data => {
        if (data) {
          window.alert('Votre foyer a été modifiée !');
          this.router.navigate(['/foyer/show/'])
        }
      })
  }

  GetFoyerByID(idFoyer: any) {

    this.foyerService.getFoyerById(idFoyer).subscribe();

  }
}