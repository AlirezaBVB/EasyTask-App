import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Not Using Signals:
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  //@Output() selectUser = new EventEmitter();
  //This is not a signal, It's same as top but it's not need a decorator so it's better & newer
  selectUser = output<string>();

  //Not Using Signal (Using Getter):
  get imgPath() {
    return "assets/users/" + this.avatar
  }

  onSelectUser() {
    this.selectUser.emit(this.id);
  }


  //Using Signals (input):
  //avatar = input.required<string>();
  //name = input.required<string>();
  // ☝🏻 they are READ-ONLY

  //Using Signals:
  //imgPath = computed(() => "assets/users/" + this.avatar())
}
