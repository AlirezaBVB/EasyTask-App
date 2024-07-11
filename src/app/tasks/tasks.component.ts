import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from "../dummy-tasks";
import { User } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user?: User;
  //We Can Write Like That:
  // @Input() name?: string | undefined;

  tasks = dummyTasks

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id)
  }
}
