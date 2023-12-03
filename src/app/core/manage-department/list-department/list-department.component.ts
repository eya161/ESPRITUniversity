import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../manage-user/authentication.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent {
  department : any={};
  nomC="";
  showStat = false;
  isHovered = false;

  

  // pagination
  page: number = 1;
  count:number = 0 ;
  tableSize:number = 5 ;
  tablesSizes:any=[5,10,15,20]
  
  // pagination end

  constructor(private s:DepartmentService,private router:Router,private authService:AuthenticationService){}

  userProfile :any;
  ngOnInit(){
         this.getallDepartment();
         this.getDepartmentStat();

         this.userProfile = this.authService.getUserProfileFromLocalStorage();
         console.log('User Profile:', this.userProfile);
   
  }

  getallDepartment(){
    this.s.getAllDepartments().subscribe(
      (alldata)=>{
        this.department = alldata;
        console.log(this.department);
      }
               );
  }

  getDepartmentStat(){
    this.s.getDepartmentStat().subscribe(
      (alldata)=>{
        console.log(alldata);
      }
               );
  }

  selectedDep: any | null = null;
  showDetails(dep: any): void {
    this.showStat = true;
    this.selectedDep = dep.nomDepartment;
  }

  closeDetails(): void {
    this.selectedDep = null;
  }

// pagination
  onTableDataChange(event:any){
this.page=event;
this.getallDepartment();
  }

  onTableSizeChange(event:any){
    this.tableSize=event.target.value;
this.page=1;
this.getallDepartment();
  }
// pagination end

  deleteDepartment(id:any){
           this.s.deleteDepartment(id).subscribe(
            (result)=>{
              alert("deleted succes");
              this.ngOnInit();
            }
           );
  }

}
