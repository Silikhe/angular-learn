import { Task } from './../../Task';
import { Component, OnInit, Input } from '@angular/core';
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task;
  faCoffee = faTrashAlt;


  constructor() { }

  ngOnInit(): void {
  }

}
