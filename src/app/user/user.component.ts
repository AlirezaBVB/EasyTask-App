import { Component, computed, signal } from '@angular/core';
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
  activeUser = signal(DUMMY_USERS[randomIndex])
  imagePath = computed(() => "assets/users/" + this.activeUser().avatar)

  // not using signal:
  // get imagePath() {
  //   return 'assets/users/' + this.activeUser.avatar
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.activeUser.set(DUMMY_USERS[randomIndex])
  }
}
