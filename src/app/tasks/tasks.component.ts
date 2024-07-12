import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from "../dummy-tasks";
import { type User } from '../user/user.model';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user?: User;
  isAddingTask = false;

  tasks = dummyTasks

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask(){
    this.isAddingTask = !this.isAddingTask;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }
}
