import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Not Using Signals:
  @Input({ required: true }) user!: User;
  @Input({ required: true }) isSelected!: boolean;
  @Output() selectUser = new EventEmitter<string>();

  //This is not a signal, It's same as top but it's not need a decorator so it's better & newer
  //selectUser = output<string>();

  //Not Using Signal (Using Getter):
  get imgPath() {
    return "assets/users/" + this.user.avatar
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }


  //Using Signals (input):
  //avatar = input.required<string>();
  //name = input.required<string>();
  // ☝🏻 they are READ-ONLY

  //Using Signals:
  //imgPath = computed(() => "assets/users/" + this.avatar())
}
