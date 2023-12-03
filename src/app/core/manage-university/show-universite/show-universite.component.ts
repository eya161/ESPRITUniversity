import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/model/images';
import { Universite } from 'src/app/model/universite';
import { UniversiteService } from '../universite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-universite',
  templateUrl: './show-universite.component.html',
  styleUrls: ['./show-universite.component.css']
})
export class ShowUniversiteComponent implements OnInit {
  pageChanged($event: Event) {
  throw new Error('Method not implemented.');
  }
    listU  :any[]= [];
    p: number = 3;
    idUniversite : any
    universite !: Universite;
    closeResult !: string;
    currentUniversite: any = null;
    form : boolean = false;
    public _universityFilter:string='';
    public filteredUniversities :any;
     page:number=1;
     pageSize: number = 5;
     allUniversite: boolean = false;
     deleteParLot: boolean = true;
     univertsDelete :number[]= [];
     public selectedMedia: Images | null = null;
     public selectedMediaIndex = 0;
     public isImageModalOpen = false;
     //codeajouter
    /* public selectedMedia: Images; // declare the selectedMedia property with type Media
     public selectedMediaIndex = 0;
     public isAddModalOpen = false;*/

    // initialiser la propriété avec une instance vide d'Images

    constructor(private UniversiteServiceService: UniversiteService,

      private r: Router,private ac: ActivatedRoute) {
        //code ajouter
      //this.selectedMedia = new Images(); // initialiser la propriété avec une instance vide d'Images
    }
    ngOnInit(): void {
      console.log(this.listU);

      this.getAllUnivs();
      this.filteredUniversities=this.listU;
      console.log(this.listU);

     /* this.universite ={
        idUniversite:0,
        nomUniversite: "",
        adresse:""

        }*/


       //this.getUniversite(this.route.snapshot.paramMap.get('idUniv'));
    }

    public get universityFilter():string{
      return this._universityFilter;
    }

    public set universityFilter(filter:string){
      this._universityFilter = filter;
      this.filteredUniversities = this.universityFilter ? this.filterUniversity(this.universityFilter) : this.listU;
    }

    getAllUnivs(){

      this.UniversiteServiceService.getAllUnivs().subscribe((res)=>
        {
          res.forEach(element => {
  this.listU.push({
    'idUniversite':element.idUniversite,
    'select':false,
    'nomUniversite':element.nomUniversite,
    'adresse':element.adresse,
    'mail':element.mail,
    'numero':element.numero,
    'logo': element.logo
  })
          });
       });
       console.log("entretaw",this.listU)
         }
         delete(i:any){
          this.listU.splice(i,1);
        }
         deleteUniv( idUniversite : any , i:any){
          this.idUniversite=this.ac.snapshot.params['idUniversite'];
          this.UniversiteServiceService.deleteUniv(idUniversite).subscribe();
          window.alert('Vos universités ont été supprimées !');

      // Mettre à jour la liste après la suppression
      this.listU=[]
      this.getAllUnivs();

      // Efface la sélection
      this.listU.forEach(u => u.select = false);
          this.delete(i);
        }
       GetUniversityByID(idUniversite: any){

        this.UniversiteServiceService.GetUniversiteById(idUniversite).subscribe();

      }


       editUniversite(){
        this.r.navigate(['edituniversite'])
      }

      deleteU(id:number): void{
        this.UniversiteServiceService.deleteUniv(id).subscribe
        (data=>{
          alert("Universite Supprime avec success! ");
          this.getAllUnivs();
        })
      }
      cancel(){
        this.form = false;
      }
     /* editUnivers(uni : Universite){
        this.UniversiteServiceService.editUniv(uni).subscribe();
      }
    //----------------------------------- Generate EXCEL Universite --------------------------------//


   /* exportExcel(){

      this.UniversiteServiceService.exportEXCEL().subscribe(x=>{
        const blob = new Blob([x], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const n = (window.navigator as any);

        if (n.msSaveOrOpenBlob) {
        n.msSaveOrOpenBlob(blob);
        return;
        }

        const data = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = data;
        link.download="universite.xlsx";
        link.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

        setTimeout(function(){
          window.URL.revokeObjectURL(data);
            link.remove();
        }, 100);
      });
    }*/


    public filterUniversity(criteria:string):Universite[]{
      criteria = criteria.toLowerCase();

      if (criteria === '') {
        this.ngOnInit();
      } else {
        this.listU = this.listU.filter(
          (universite: Universite) => universite.nomUniversite.toLowerCase().match(criteria)
        );
      }

      return this.listU;
    }

    selectAll(){
  this.listU .forEach((item)=>{
    item.select= this.allUniversite;

  }) }

  oneSelect(){
    return this.listU.filter(u=>u.select == true).length
  }
  deletAll(){
   this.univertsDelete= this.listU.filter(u=>u.select == true).map(u=>u.idUniversite);
  console.log(this.univertsDelete)
  this.UniversiteServiceService .deleteUnivParLot(this.univertsDelete).subscribe(res=>{
  window.alert('Vos universités ont été supprimées !');

      // Mettre à jour la liste après la suppression
      this.listU=[]
      this.getAllUnivs();

      // Efface la sélection
      this.listU.forEach(u => u.select = false);
  })

  }
  //codeajouter
  /*public onImageClick(medias: Images[]): void {
      this.selectedMediaIndex = 0;
      this.selectedMedia = medias[0];
      this.isImageModalOpen = true;
    }*/
  /*  public isImageModalOpen: boolean = false; // Track if the image modal is open
    showText: boolean = false; // Define a boolean flag to control the visibility of the "Show" text

    // Handle image click event

    // Close the image modal
    public closeImageModal(): void {
      this.isImageModalOpen = false; // Close the image modal
    //  this.selectedMedia = null; // Clear the selected media object
    }
    public onPreviousClick(claim: Universite): void {
      if (this.selectedMediaIndex > 0) {
        this.selectedMediaIndex--;
        this.selectedMedia = claim.images[this.selectedMediaIndex];
      }
    }

    public onNextClick(claim: Universite): void {
      if (this.selectedMediaIndex < claim.images.length - 1) {
        this.selectedMediaIndex++;
        this.selectedMedia = claim.images[this.selectedMediaIndex];
      }
    }*/



    /*public isImageModalOpen: boolean = false; // Track if the image modal is open
    showText: boolean = false; */// Define a boolean flag to control the visibility of the "Show" text

    // Handle image click event

    // Close the image modal
   /* public closeImageModal(): void {
      this.isImageModalOpen = false; // Close the image modal
      //this.selectedMedia = null; // Clear the selected media object
    }*/

    /*public onPreviousClick(u: Universite): void {
      if (this.selectedMediaIndex > 0) {
        this.selectedMediaIndex--;
        this.selectedMedia = u.images[this.selectedMediaIndex];
      }
    }

    public onNextClick(u: Universite): void {
      if (this.selectedMediaIndex < u.images.length - 1) {
        this.selectedMediaIndex++;
        this.selectedMedia = u.images[this.selectedMediaIndex];
      }
    }*/
    /*onAddClick() {
      this.isAddModalOpen = true;
    }*/
    public closeImageModal(): void {
      this.isImageModalOpen = false;
    }


    public onImageClick(images: Images): void {
      this.selectedMedia = images;
      this.isImageModalOpen = true;
    }

   /* public onPreviousClick(u: Universite): void {
      if (u.images.length > 1 && this.selectedMediaIndex > 0) {
        this.selectedMediaIndex--;
        this.selectedMedia = u.images[this.selectedMediaIndex];
      }
    }*/

   /* public onNextClick(u: Universite): void {
      if (u.images.length > 1 && this.selectedMediaIndex < u.images.length - 1) {
        this.selectedMediaIndex++;
        this.selectedMedia = u.images[this.selectedMediaIndex];
      }
    }*/
    showTicket(u: Universite) {
      const url = 'http://localhost:4200/assets/'+u.nomUniversite+'.pdf';
      const win = window.open(url, '_blank');
      if (win) {
        win.focus();
      } else {
        console.error('Failed to open window');
      }
    }

}
