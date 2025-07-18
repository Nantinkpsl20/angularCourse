//import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';
import { Component, Input,  Output, EventEmitter, output } from '@angular/core';

//create custom type User to define the structure of a user object
/*type User = {
    id: string;
    avatar: string;
    name: string;
}*/

interface User{
    id: string;
    avatar: string;
    name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) user!: User;

  @Output() select = new EventEmitter<string>();//now the event knows that it will emit a string value when the user is selected

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
      this.select.emit(this.user.id); //emit a value when the user is selected
  }
}












  /*avatar = input.required<string>();
  name = input.required<string>();*/


  /*imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  });*/