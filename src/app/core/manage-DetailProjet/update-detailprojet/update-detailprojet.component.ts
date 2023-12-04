// update-detailprojet.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailProjet } from 'src/app/model/DetailProjet';
import { DetailProjetService } from '../detail-projet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-detailprojet',
  templateUrl: './update-detailprojet.component.html',
  styleUrls: ['./update-detailprojet.component.css'],
})
export class UpdateDetailprojetComponent implements OnInit {
  updateDetail = new FormGroup({
    descriptionDetail: new FormControl('', Validators.required),
    technologie: new FormControl('', Validators.required),
  });

  currentDetail: DetailProjet = new DetailProjet();

  constructor(
    private detailProjetServiceService: DetailProjetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.detailProjetServiceService
      .GetDetailById(this.route.snapshot.params['id'])
      .subscribe((data) => {
        this.updateDetail.patchValue({
          descriptionDetail: data.descriptionDetail,
          technologie: data.technologie,
        });
      });
  }

  editDetail() {
    this.currentDetail.descriptionDetail =
      this.updateDetail.value.descriptionDetail ?? '';
    this.currentDetail.technologie = this.updateDetail.value.technologie ?? '';

    this.currentDetail.idDetail = this.route.snapshot.params['id'];

    this.detailProjetServiceService
      .editDetail(this.currentDetail)
      .subscribe((data) => {
        if (data) {
          window.alert('Votre detail a été modifiée !');
          this.router.navigate(['/detail/show/']);
        }
      });
  }
}
