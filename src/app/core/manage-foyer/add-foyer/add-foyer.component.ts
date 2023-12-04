import { Component } from '@angular/core';
import { FoyerService } from '../foyer.service';
import { Foyer } from 'src/app/model/foyer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.css']
})
export class AddFoyerComponent {
  foyer = new Foyer();
  id : any;
  fileToUpload?: File;
  constructor(private foyerService: FoyerService, private route: Router) { }

 /*
  
  addImage(idFoyer: any, image: any) {
    if (this.isFileInput(image)) {
      console.log("fff",this.foyer)
      const formData = new FormData();
      formData.append('http://localhost:8082/uploads/files/', image);

      this.foyerService.uploadFoyerImage(idFoyer, formData).subscribe(data => {
        console.log('Image uploaded successfully', data);
      });
    }
  }

  isFileInput(value: any): value is File {
    return value instanceof File;
  }

  addFoyerr(foyer: any) {
    this.foyerService.addFoyer(foyer).subscribe(
      () => {
        window.alert('Votre foyer a été ajoutée !');
        console.log(this.foyer);
        //console.log(this.formData);
        //this.route.navigate(['/foyer/show']);
      },
      (err) => {
        console.log("erreur", err);
      },
      () => {
        this.addImage(foyer.idFoyer, foyer.image);
      }
    );
  }*/
  /*onUpload() {
    if (!this.fileToUpload) {
      alert('No file selected please upload an image first !!');
      return;
    }
  
    const formData = new FormData();
    formData.append('file', this.fileToUpload);
  
    this.foyerService.uploadFoyerImage(this.id , formData).subscribe();
    this.reloadComponent();
  }
  reloadComponent(): void {
    const currentRoute = this.route.url.split('?')[0];
    this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.route.navigate([currentRoute]);
    });
  }

  onFileSelected(image: any) {
    const inputElement = image.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.fileToUpload = inputElement.files[0];
    }
  }*/
  addFoyerr(foyer: any) {
    this.foyerService.addFoyer(foyer).subscribe(
      () => {
        window.alert('Votre foyer a été ajoutée !');
       
        this.route.navigate(['/foyer/show']);
      },
      (err) => {
        console.log("erreur", err);
      },
      () => {
      }
    );
  }

}