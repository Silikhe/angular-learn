import { TaskService } from './../../services/task.service';
import { Task } from './../../Task';
import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  faCoffee = faCoffee;


  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks)
  }

}
