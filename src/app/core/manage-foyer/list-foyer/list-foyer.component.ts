import { Component, OnInit } from '@angular/core';
import { Foyer } from 'src/app/model/foyer';
import { FoyerService } from '../foyer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-foyer',
  templateUrl: './list-foyer.component.html',
  styleUrls: ['./list-foyer.component.css']
})
export class ListFoyerComponent implements OnInit {
  pageChanged($event: Event) {
    throw new Error('Method not implemented.');
    }
    
  listF: any;
  idFoyer : any
  foyer !: Foyer;
  closeResult !: string;
  currentFoyer: any = null;
  form : boolean = false;
  
  //nomFoyer:any;
  public _foyerFilter:string='';
  public filteredFoyers :any;
  test = "http://localhost:8082/uploads/files/";
isZoomEnabled: any;
  // pagination
  page:number=1;
  pageSize: number = 5;
  // pagination end
  constructor(private foyerService: FoyerService,private r: Router,private ac: ActivatedRoute) { }
  ngOnInit(): void {
    this.getAllFoyerss();
    this.filteredFoyers=this.listF;

  }
  public get foyerFilter():string{
    return this._foyerFilter;
  }

  public set foyerFilter(filter:string){
    this._foyerFilter = filter;
    this.filteredFoyers = this.foyerFilter ? this.filterFoyer(this.foyerFilter) : this.listF;
  }

  getAllFoyerss(){
    this.foyerService.getAllFoyers().subscribe(res=>this.listF=res);
       }
       delete(i:any){
        this.listF.splice(i,1);
      }
       deleteFoyer( idFoyerr : any , i:any){
        this.idFoyer=this.ac.snapshot.params['idFoyer'];
        this.foyerService.deleteFoyer(idFoyerr).subscribe();
        window.alert('Votre foyer a été supprimée !');
        this.delete(i);
        this.r.navigate(['/foyer/show/'])
      }
     GetFoyerByID(idFoyer: any){

      this.foyerService.getFoyerById(idFoyer).subscribe();

    }


     editFoyer(){
      this.r.navigate(['editfoyer'])
    }

    deleteU(id:number): void{
      this.foyerService.deleteFoyer(id).subscribe
      (data=>{
        alert("foyer Supprime avec success! ");
        this.getAllFoyerss();
      })
    }
    cancel(){
      this.form = false;
    }
   
  public filterFoyer(criteria:string):Foyer[]{
    criteria = criteria.toLowerCase();

    if (criteria === '') {
      this.ngOnInit();
    } else {
      this.listF = this.listF.filter(
        (foyer: Foyer) => foyer.nomFoyer.toLowerCase().match(criteria)
      );
    }

    return this.listF;
  }



}

