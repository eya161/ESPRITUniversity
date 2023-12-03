import { Component } from '@angular/core';
import { ClasseService } from '../classe.service';
import { Router } from '@angular/router';
import { DepartmentService } from '../../manage-department/department.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent {
  constructor(private s:ClasseService,private router:Router , private ds:DepartmentService){}

  department : any={};
  departmentId : any;
  addC :any={};
  
  addClasse = new FormGroup({
    classeName: new FormControl('',[Validators.required,Validators.pattern('^[^0-9].*$') ,Validators.minLength(3)]),
    capacity: new FormControl('',[Validators.required, Validators.pattern('^[1-9][0-9]{0,3}$')]),
    etage: new FormControl('',[Validators.required , Validators.max(99)]),
    disponibility: new FormControl('',[Validators.required]),
    Departement: new FormControl('',[Validators.required])

  }
  );

  message:boolean=false;
  ngOnInit(): void {

    this.getallDepartment();
    
  }

  save(){
    console.log(this.addClasse.value);

    this.departmentId = this.addClasse.get('Departement')!.value;

    if (this.addClasse.controls['Departement']) {
      this.addClasse.controls['Departement']!.setParent(null);
    }
     

    this.s.addClasse(this.addClasse.value,this.departmentId).subscribe(
      (result)=>{
       // console.log("Add succes "+result);
       this.message=true;
       this.addClasse.reset({});
       alert("Classe Added");
     this.router.navigate(['/lazyCla']);
      }
    );
  }

  removeMessage(){
    this.message=false;
  }

  

  get classeName(){
return this.addClasse.get('classeName');
  }

  get capacity(){
    return this.addClasse.get('capacity');
      }

      get etage(){
        return this.addClasse.get('etage');
          }

          get disponibility(){
            return this.addClasse.get('disponibility');
              }
         
              getallDepartment(){
                this.ds.getAllDepartments().subscribe(
                  (alldata)=>{
                    this.department = alldata;
                    console.log(this.department);
                  }
                           );
              }
    
  
}
