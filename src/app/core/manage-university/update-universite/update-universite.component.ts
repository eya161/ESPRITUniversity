import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Images } from 'src/app/model/images';
import { Universite } from 'src/app/model/universite';
import { UniversiteService } from '../universite.service';
import { VilleService } from '../../manage-ville/ville.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.css']
})
export class UpdateUniversiteComponent {
  selectedVille :any;
  ville:any
  nameimage : any;

  universite:Universite | undefined;
  updateUniversite= new FormGroup({
    idUniversite: new FormControl('',Validators.required),
    nomUniversite: new FormControl('',Validators.required),
    adresse:new FormControl('',Validators.required),
    mail:new FormControl('', [Validators.required, Validators.pattern(/^[^!&?#]*@[^!&?#]*$/)]),
    numero:new FormControl('',Validators.required),
    ///codeajouter
    selectedVille:new FormControl('',Validators.required),
    logo: new FormControl(null, Validators.required),

  })
///cde ajouter
  mediaList: Images = new Images();
  selectedFiles: File[] = [];
  onFileSelected(event:any): void {
    //this.selectedFiles = event.target.files;
    const file = event.target.files[0];
    this.updateUniversite.get('logo')?.setValue(file);
  }
  currentUniversite: Universite = new Universite();
    constructor(private universiteServiceService:UniversiteService,private villeService:VilleService , private router :Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.villeService.getAllVilles().subscribe(res=>this.ville =res)

    //call wserviice pour recupere le univarsite by id
   this.universiteServiceService.GetUniversiteById( this.route.snapshot.params['id']).subscribe(data=>{
    console.log("ggggggggggggggggg",data.logo.imagenUrl); // Log the entire response to the console

    this.updateUniversite.patchValue({
      idUniversite:data.idUniversite,
      nomUniversite: data.nomUniversite,
      adresse: data.adresse,
      mail: data.mail,
      numero: data.numero,
     // selectedVille: data.ville ,
     selectedVille: data.ville?.idVille,
     logo:data.logo
    }
    );
    this.nameimage = data.logo.imagenUrl;
    if (data.ville) {
      // Use setValue to set the default value for selectedVille
      this.updateUniversite.get('logo')!.setValue(data.logo?.idVille);
      this.updateUniversite.get('selectedVille')!.setValue(data.ville?.idVille);
    }

    console.log("entre", data.nomUniversite)
    console.log("entre", data.ville.nom )
    console.log("entre", data.logo )

   })

   /* this.universiteServiceService.GetUniversiteById(this.route.snapshot.params.id).subscribe((result:any)=>
    {this.updateUniversite= new FormGroup({
      nomUniversite: new FormControl(result['nomUniversite']),
      adresse:new FormControl(result['adresse'])
    })})*/


  }
  editUniv(){

    const formData = new FormData();
    formData.append('idUniversite', this.updateUniversite.value.idUniversite || '');
    formData.append('nomUniversite', this.updateUniversite.value.nomUniversite || '');
  formData.append('adresse', this.updateUniversite.value.adresse || '');
  formData.append('mail', this.updateUniversite.value.mail || '');
  formData.append('numero', this.updateUniversite.value.numero || '');
  const logo = new Images();
  formData.append('file', this.updateUniversite.value.logo|| '');
  console.log("tesrrrrrrrrrrrrrrrrrrrrrrrrrrrt", this.updateUniversite.value.logo);

 // formData.append('logo', this.updateUniversite.get('logo')?.value);

 // Update the currentUniversite.nomUniversite with a default value if it's null or undefined
/*this.currentUniversite.nomUniversite = this.updateUniversite.value.nomUniversite ?? '';
 // Update the currentUniversite.nomUniversite with a default value if it's null or undefined
this.currentUniversite.adresse = this.updateUniversite.value.adresse ?? '';
this.currentUniversite.mail = this.updateUniversite.value.mail ?? '';
this.currentUniversite.numero = this.updateUniversite.value.numero ?? '';*/
//codeahj
/*this.currentUniversite.selectedVille = this.updateUniversite.value.selectedVille ?? '';*/

console.log("test",this.updateUniversite.value.selectedVille);

/*this.currentUniversite.idUniversite = this.route.snapshot.params['id'];*/
this.universiteServiceService.editUniversitee( formData,this.updateUniversite.value.selectedVille,this.mediaList).subscribe(
  data=>{ if(data){
    window.alert('Votre université a été modifiée !');
    this.router.navigate(['/universite/show/'])
  }})


  /*this.universiteServiceService.editUniversite(Univ,this.route.snapshot.params.id).subscribe(data => {
      window.alert('Your university has been modified !');
    this.router.navigate(['/home/university'])
    });
*/
  }

  GetUniversityByID(idUniversite: any){

    this.universiteServiceService.GetUniversiteById(idUniversite).subscribe();

  }
}
