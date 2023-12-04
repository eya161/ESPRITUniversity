import { Component, Input, OnInit } from '@angular/core';
import { Bloc } from 'src/app/model/bloc';
import { BlocsService } from '../blocs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/model/foyer';

@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.css']
})
export class ListBlocComponent implements OnInit {
 
  pageChanged($event: Event) {
    throw new Error('Method not implemented.');
    }
  listB: any;
  idBloc : any
  nomFoyer:any;
  bloc!: Bloc;
  closeResult !: string;
  currentBloc: any = null;
  form : boolean = false;
  public _blocFilter:string='';
  public filteredBlocs :any;
  page:number=1;
  pageSize: number = 5;
  constructor(private blocService: BlocsService,private r: Router,private ac: ActivatedRoute) { }
  ngOnInit(): void {
    this.getAllBlocss();
    this.filteredBlocs=this.listB;

  }
  public get blocFilter():string{
    return this._blocFilter;
  }

  public set blocFilter(filter:string){
    this._blocFilter = filter;
    this.filteredBlocs = this.blocFilter ? this.filterBloc(this.blocFilter) : this.listB;
  }

  getAllBlocss(){
    this.blocService.getAllBlocs().subscribe(res=>this.listB=res);
       }
       delete(i:any){
        this.listB.splice(i,1);
      }
       deleteBloc( idBlocs : any , i:any){
        this.idBloc=this.ac.snapshot.params['idBloc'];
        this.blocService.deleteBloc(idBlocs).subscribe();
        window.alert('Votre bloc a été supprimée !');
        this.delete(i);
      }
     GetBlocByID(idBloc: any){

      this.blocService.getBlocById(idBloc).subscribe();

    }


     editBloc(){
      this.r.navigate(['updateBloc'])
    }

    deleteU(id:number): void{
      this.blocService.deleteBloc(id).subscribe
      (data=>{
        alert("bloc Supprime avec success! ");
        this.getAllBlocss();
      })
    }
    cancel(){
      this.form = false;
    }
   
  public filterBloc(criteria:string):Bloc[]{
    criteria = criteria.toLowerCase();

    if (criteria === '') {
      this.ngOnInit();
    } else {
      this.listB = this.listB.filter(
        (bloc: Bloc) => bloc.nomBloc.toLowerCase().match(criteria)
      );
    }

    return this.listB;
  }


  // pagination end

}
