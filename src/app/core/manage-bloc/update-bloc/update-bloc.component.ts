import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Bloc } from 'src/app/model/bloc';
import { BlocsService } from '../blocs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Foyer } from 'src/app/model/foyer';


@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css']
})
export class UpdateBlocComponent implements OnInit {
  updateBloc = new FormGroup({
    nomBloc: new FormControl('', Validators.required),
    capaciteBloc: new FormControl('', Validators.required),
  });

  bloc: Bloc = new Bloc();

  constructor(
    private blocService: BlocsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.blocService
      .getBlocById(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.updateBloc.patchValue({
          nomBloc: data.nomBloc,
          capaciteBloc: data.capaciteBloc,
        });
      });
  }

  editBloc() {
    // Extract the capaciteBloc value from the form
    const capaciteBlocValue = this.updateBloc.value.capaciteBloc;
  
    // Check if capaciteBlocValue is a valid number or convert it to a number
    const parsedCapaciteBloc = isNaN(Number(capaciteBlocValue)) ? 0 : +capaciteBlocValue!;
  
    this.bloc.nomBloc = this.updateBloc.value.nomBloc ?? '';
    this.bloc.capaciteBloc = parsedCapaciteBloc;
  
    this.bloc.idBloc = this.route.snapshot.params['id'];
  
    this.blocService
      .updateBloc(this.bloc)
      .subscribe((data) => {
        if (data) {
          window.alert('Votre bloc  a été modifié !');
          this.router.navigate(['/bloc/show/']);
        }
      });
  }
}