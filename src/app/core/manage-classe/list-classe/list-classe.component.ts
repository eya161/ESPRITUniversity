import { Component, Renderer2 } from '@angular/core';
import { ClasseService } from '../classe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-classe',
  templateUrl: './list-classe.component.html',
  styleUrls: ['./list-classe.component.css']
})
export class ListClasseComponent {
  classe : any={};
  nomC="";
  show=false;
  j=-1

  resultPourcentage=0;
  pourDispo=0;
  pourNonDispo=0;

  selectedClassroom: any | null = null;

  isButtonEnabled = true;

  toggleButton() {
    this.isButtonEnabled = !this.isButtonEnabled;
    
    // Apply styles using Renderer2
    if (this.isButtonEnabled) {
      this.resetButtonColor();
    } else {
      this.setButtonColor('red');
    }
  }

  private resetButtonColor() {
    this.setButtonColor('green');
  }

  private setButtonColor(color: string) {
    const button = document.querySelector('button');
    if (button) {
      this.renderer.setStyle(button, 'background-color', color);
    }
  }

  // pagination
  page: number = 1;
  count:number = 0 ;
  tableSize:number = 5 ;
  tablesSizes:any=[5,10,15,20]
  // pagination end

  constructor(private s:ClasseService,private router:Router,private renderer: Renderer2){}

  ngOnInit(){

    
    this.getAllClasses();
         this.getpourDispo();
         this.getpourNonDispo();
        
         
  }

  getAllClasses(){
    this.s.getAllClasses().subscribe(
      (alldata)=>{
        this.classe = alldata;
        console.log(this.classe);
      }
               );
              
  }

  isAvailable: boolean = true; // Assuming the initial state is available

  showAvailable() {
    this.isAvailable = true;
    this.resultPourcentage=this.pourDispo;
  }

  showUnavailable() {
    this.isAvailable = false;
    this.resultPourcentage=this.pourNonDispo;
  }

  getColor() {
    return this.isAvailable ? 'green' : 'red';
  }

  getpourDispo(){
    this.s.getstatDispoclasse().subscribe(
      (alldata : any)=>{
        this.pourDispo = alldata;
        this.resultPourcentage=this.pourDispo;
      }
               );
  }
  getpourNonDispo(){
    this.s.getstatNonDispoclasse().subscribe(
      (alldata : any)=>{
        this.pourNonDispo = alldata;
       
      }
               );
  }

// pagination
  onTableDataChange(event:any){
this.page=event;
this.getAllClasses();
  }

  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
this.page=1;
this.getAllClasses();
  }
// pagination end

  deleteClasse(id:any){
           this.s.deleteClasse(id).subscribe(
            (result)=>{
              alert("deleted succes");
              this.ngOnInit();
            }
           );
  }

  showDepartment(index:any){
    this.show=true
    this.j=index
  }


  showDetails(classroom: any): void {
    this.selectedClassroom = classroom;
  }

  closeDetails(): void {
    this.selectedClassroom = null;
  }

}
