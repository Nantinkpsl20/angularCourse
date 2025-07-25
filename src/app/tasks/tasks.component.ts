import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData, Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})

export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;
  isAddingTask = false;

  constructor( private tasksService: TasksService){}

  get selectedUserTasks() {
    //we get the user tasks
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(taskId: string) {}

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    //it doesn't show the app-new-task cause @if(isAddingTask)
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isAddingTask = false;
  }
}
