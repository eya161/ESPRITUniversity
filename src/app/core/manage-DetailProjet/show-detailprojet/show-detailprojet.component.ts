import { Component, OnInit } from '@angular/core';
import { DetailProjet } from 'src/app/model/DetailProjet';
import { DetailProjetService } from '../detail-projet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-detailprojet',
  templateUrl: './show-detailprojet.component.html',
  styleUrls: ['./show-detailprojet.component.css'],
})
export class ShowDetailprojetComponent implements OnInit {
  listU: any;
  idDetail: any;
  //detailProjet!: DetailProjet;
  closeResult!: string;
  currentdetailProjet: any = null;
  form: boolean = false;
  details: DetailProjet[] = [];
  searchString: string = '';
  //ProjetFilter: string = ''; // Added ProjetFilter property

  constructor(
    private DetailServiceService: DetailProjetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllDetails();
  }

  getAllDetails() {
    this.DetailServiceService.getAllDetails().subscribe(
      (res) => (this.listU = res)
    );
  }

  delete(i: any) {
    this.listU.splice(i, 1);
  }

  deleteDetail(idDetail: any, i: any) {
    this.idDetail = this.route.snapshot.params['idDetail'];
    this.DetailServiceService.deleteDetail(idDetail).subscribe();
    window.alert('Votre Detail a été supprimée !');
    this.delete(i);
  }

  getDetailById(idDetail: any) {
    this.DetailServiceService.GetDetailById(idDetail).subscribe();
  }

  editDetail() {
    this.router.navigate(['editdetail']);
  }

  deleteP(id: number): void {
    this.DetailServiceService.deleteDetail(id).subscribe((data) => {
      alert('detail Supprime avec success! ');
      this.getAllDetails();
    });
  }

  cancel() {
    this.form = false;
  }

  pdf() {
    console.log('Export to PDF function called');
    this.DetailServiceService.getPDF().subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'detailsProjet.pdf';
        link.click();
        URL.revokeObjectURL(url);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filterDetails() {
    console.log('Filtering details...');
    console.log('Search String:', this.searchString);

    if (this.searchString.trim() !== '') {
      // Passer le bon paramètre (descriptionDetail) au service
      this.DetailServiceService.filterDetails(this.searchString, '').subscribe(
        (filteredDetails) => {
          this.listU = filteredDetails;
          console.log('Filtered List:', this.listU);
        },
        (error) => {
          console.error('Error filtering details:', error);
        }
      );
    } else {
      // Si la chaîne de recherche est vide, réinitialisez la liste complète
      console.log('Search string is empty. Resetting the list.');
      this.getAllDetails();
    }
  }
}

