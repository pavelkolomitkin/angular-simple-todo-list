import {Component, Input, OnInit} from '@angular/core';
import {TodoList} from '../../models/todolist.model';
import {Todo} from '../../models/todo.model';

@Component({
  selector: '[app-todo-list]',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: TodoList = null;
  @Input() orderIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onCreateTodoHandler(todo: Todo)
  {
    this.todoList.addTodo(todo);
  }
}
