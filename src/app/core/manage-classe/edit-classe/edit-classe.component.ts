import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClasseService } from '../classe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../../manage-department/department.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-classe',
  templateUrl: './edit-classe.component.html',
  styleUrls: ['./edit-classe.component.css']
})
export class EditClasseComponent {
  constructor(private s:ClasseService,private router:ActivatedRoute ,private route:Router , private ds:DepartmentService){}

  @Input()categorytoUpdate !:any;
@Output()notif=new EventEmitter();

  department : any={};
  addC :any={};
  lastDepartment:any;
  
  editClasse = new FormGroup({
  
    idClasse:new FormControl(''),
    classeName: new FormControl('',[Validators.required,Validators.pattern('^[^0-9].*$') ,Validators.minLength(3)]),
    capacity: new FormControl('',[Validators.required, Validators.pattern('^[1-9][0-9]{0,3}$')]),
    etage: new FormControl('',[Validators.required , Validators.max(99)]),
    disponibility: new FormControl('',[Validators.required])
   

  }
  );

  message:boolean=false;
  ngOnInit(): void {
  
    this.s.getClasseById(this.router.snapshot.params["id"]).subscribe((result:any)=>{
console.log(result);

this.lastDepartment = result["department"];

this.editClasse = new FormGroup({
  idClasse:new FormControl(result["idClasse"]),
  classeName: new FormControl(result["classeName"],[Validators.required,Validators.pattern('^[^0-9].*$') ,Validators.minLength(3)]),
    capacity: new FormControl(result["capacity"],[Validators.required, Validators.pattern('^[1-9][0-9]{0,3}$')]),
    etage: new FormControl(result["etage"],[Validators.required , Validators.max(99)]),
    disponibility: new FormControl(result["disponibility"],[Validators.required])
} );
    })
    
  }

  save(){
    console.log(this.editClasse.value);

    // Use the non-null assertion operator (!) to tell TypeScript that the control is not null
    
    this.s.editClasse(this.editClasse.value).subscribe(
      (result)=>{
       // console.log("Add succes "+result);
       this.message=true;
       this.editClasse.reset({});
       // alert("Department Added");
       this.route.navigate(['/lazyCla']);
      }
    );
  }

  removeMessage(){
    this.message=false;
  }

  get classeName(){
return this.editClasse.get('classeName');
  }

  get capacity(){
    return this.editClasse.get('capacity');
      }

      get etage(){
        return this.editClasse.get('etage');
          }

          get disponibility(){
            return this.editClasse.get('disponibility');
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
