import { Component } from '@angular/core';
import { DetailProjetService } from '../detail-projet.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-detailprojet',
  templateUrl: './add-detailprojet.component.html',
  styleUrls: ['./add-detailprojet.component.css'],
})
export class AddDetailprojetComponent {
  constructor(
    private detailProjetServiceService: DetailProjetService,
    private route: Router
  ) {}

  listU: any;
  detailProjet: any = {};

  ngOnInit(): void {}

  getAllDetails() {
    this.detailProjetServiceService
      .getAllDetails()
      .subscribe((res) => (this.listU = res));
  }

  addDetail(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.detailProjetServiceService.addDetail(form.value).subscribe((data) => {
      window.alert('Votre projet a été ajouté !');
      this.route.navigate(['/detail/show']);
    });
  }
}
