import {Component, Input, OnInit} from '@angular/core';
import {TodoList} from '../models/todolist.model';

@Component({
  selector: 'app-todo-list-list',
  templateUrl: './todo-list-list.component.html',
  styleUrls: ['./todo-list-list.component.css']
})
export class TodoListListComponent implements OnInit {

  @Input() todoListList: Array<TodoList> = [];

  constructor() { }

  ngOnInit() {
  }

}
