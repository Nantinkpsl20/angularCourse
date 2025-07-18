import { Component } from '@angular/core';

import { HeaderComponent } from './Header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import {TasksComponent} from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  //with this action, we can now use the users array in the template app.component.html
  users = DUMMY_USERS; //set the property users equal to the DUMMY_USERS array
  user:any;
  //name!: string;//set the property name
  selectedUserId = 'u1'; //set the property selectedUserId to a default value

  get selectedUser(){
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectedUser(id:string){
    //console.log('Selected User with id:' + id);
    this.user = this.users.find(user => user.id === id);


    //this.name = this.user.name;
    //console.log('Selected User with name:' + this.name );
  }
}
