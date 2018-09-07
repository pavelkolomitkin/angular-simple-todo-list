import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoList} from '../../models/todolist.model';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.css']
})
export class TodoListFormComponent implements OnInit {

  @Output('onCreate') onCreateEmitter: EventEmitter<TodoList> = new EventEmitter<TodoList>();

  title: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm($event)
  {
    this.onCreateEmitter.emit(new TodoList(this.title));
    this.title = '';
  }

}
