import { Component } from '@angular/core';
import { BlocsService } from '../blocs.service';
import { Router } from '@angular/router';
import { FoyerService } from '../../manage-foyer/foyer.service';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent {
  
  constructor(private blocService:BlocsService ,private foyerservice:FoyerService, private route : Router) { }
  listBloc: any ;
  idFoyer:any;
  foyers:any;
  ngOnInit(): void {
    this.getAllFoyers();
  }

  getAllFoyers() {
    this.foyerservice.getAllFoyers().subscribe((res) => {
      this.foyers = res;
    });
  }
  
    addBlocc(bloc: any) {
    this.blocService.addBloc(bloc, this.idFoyer).subscribe((bloc) => {
      window.alert('Votre bloc a été ajouté !');
      this.route.navigate(['/bloc/show']);
    });

  }


}
