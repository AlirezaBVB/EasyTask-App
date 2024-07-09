import { Component } from '@angular/core';
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
  activeUser = DUMMY_USERS[randomIndex]

  get imagePath() {
    return 'assets/users/' + this.activeUser.avatar
  }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.activeUser = DUMMY_USERS[randomIndex]
  }
}
