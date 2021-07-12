import { Task } from './../../Task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
