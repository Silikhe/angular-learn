import { Task } from './../../Task';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})

export class TasksItemComponent implements OnInit {
  
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Input() task:Task =  {id:0, text:'',day:'',reminder:false};
  faCoffee = faTrashAlt;


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task){
    this.onDeleteTask.emit(task)
    console.log(task)
  }

}
