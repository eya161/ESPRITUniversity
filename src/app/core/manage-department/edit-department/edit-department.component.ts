import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent {
  constructor(private s:DepartmentService,private router:ActivatedRoute, private r:Router){

  }

  editDepartment = new FormGroup({
    idDepartment:new FormControl(''),
    nombreClasses:new FormControl(''),
    nomDepartment: new FormControl('',[Validators.required,Validators.pattern('^[^0-9].*$')]),
    nombreEtage: new FormControl('',[Validators.required])
  }
  );

  message:boolean=false;
  ngOnInit(): void {

    this.s.getDepartmentById(this.router.snapshot.params["id"]).subscribe((result:any)=>{
console.log(result);
this.showDetails(result);

this.editDepartment = new FormGroup({
  idDepartment:new FormControl(result["idDepartment"]),
  nombreClasses:new FormControl(result["nombreClasses"]),
  nomDepartment: new FormControl(result["nomDepartment"],[Validators.required,Validators.pattern('^[^0-9].*$')]),
  nombreEtage: new FormControl(result["nombreEtage"],[Validators.required])
} );
    })
    
  }

  save(){
    console.log(this.editDepartment.value);
    this.s.editDepartment(this.editDepartment.value).subscribe(
      (result)=>{
       // console.log("Add succes "+result);
       this.message=true;
       this.r.navigate(['']);
      }
    );
  }

  removeMessage(){
    this.message=false;
  }

  showStat = false;
  isHovered = false;
  selectedDep: any | null = null;
  showDetails(dep: any): void {
    this.showStat = true;
    this.selectedDep = dep.nomDepartment;
  }

  closeDetails(): void {
    this.selectedDep = null;
  }

  get nomDepartment(){
return this.editDepartment.get('nomDepartment');
  }

  get nombreEtage(){
    return this.editDepartment.get('nombreEtage');
      }
}
