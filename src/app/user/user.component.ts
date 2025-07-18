//import { Component, Input, input, computed, Output, EventEmitter, output } from '@angular/core';
import { Component, Input,  Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) id!: string;
  //we set the property avatar as settable from outside
  @Input({required: true}) avatar!: string; //using ! to indicate that this property will be set later
  @Input({required: true}) name!: string; 
  @Output() select = new EventEmitter<string>();//now the event knows that it will emit a string value when the user is selected

  //select = output<string>();//ορίζεται αυτόματα ως EventEmitter<string> για να εκπέμπει τιμές τύπου string όταν ο χρήστης επιλέγεται

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectedUser() {
      this.select.emit(this.id); //emit a value when the user is selected
  }
}












  /*avatar = input.required<string>();
  name = input.required<string>();*/


  /*imagePath = computed(() => {
    return 'assets/users/' + this.avatar()
  });*/