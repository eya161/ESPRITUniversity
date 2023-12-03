import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  constructor(private userservice:UserService){}
  users:any;
  public filteredUser :any;
  public userFilter:string='';
  ngOnInit(): void {
    this.getAllUsers();
    this.filteredUser=this.users;

  }
  getAllUsers(){
    this.userservice.getUsers().subscribe(
      res=>this.users=res
    );
  }
  public filterUser(criteria:string):User[]{
    criteria = criteria.toLowerCase();
    if (criteria === '') {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(
        (user: User) => user.email.toLowerCase().match(criteria)
      );
    }

    return this.users;
  }
}
