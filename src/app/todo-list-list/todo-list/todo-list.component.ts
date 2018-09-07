import {Component, Input, OnInit} from '@angular/core';
import {TodoList} from '../../models/todolist.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: TodoList = null;

  constructor() { }

  ngOnInit() {
  }

}
