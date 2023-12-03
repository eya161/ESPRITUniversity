import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {

  constructor(private s:DepartmentService,private router:Router){}
university:any;
uniId:any;

  addDepartment = new FormGroup({
    nomDepartment: new FormControl('',[Validators.required,Validators.pattern('^[^0-9].*$')]),
    nombreClasses: new FormControl('0'),
    nombreEtage: new FormControl('',[Validators.required]),
    Universite: new FormControl('',[Validators.required])
  }
  );

  message:boolean=false;
  ngOnInit(): void {

    this.getallUniversity();
    
  }

  save(){
    console.log(this.addDepartment.value);

     // Use the non-null assertion operator (!) to tell TypeScript that the control is not null
     this.uniId = this.addDepartment.get('Universite')!.value;

     // Check if the control exists before attempting to remove it
     if (this.addDepartment.controls['Universite']) {
       // Remove the control using the controls property
       this.addDepartment.controls['Universite']!.setParent(null);
     }

    this.s.addDepartment(this.addDepartment.value,this.uniId).subscribe(
      (result)=>{
       // console.log("Add succes "+result);
       this.message=true;
       this.addDepartment.reset({});
       // alert("Department Added");
      // this.router.navigate(['/ListDepartment']);
      }
    );
  }

  removeMessage(){
    this.message=false;
  }
  

  get nomDepartment(){
return this.addDepartment.get('nomDepartment');
  }

  get nombreEtage(){
    return this.addDepartment.get('nombreEtage');
      }
 

      getallUniversity(){
        this.s.getAllUniversity().subscribe(
          (alldata)=>{
            this.university = alldata;
            console.log(this.university);
          }
                   );
      }
}
