import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../../../models/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output('onCreate') onTodoCreate: EventEmitter<Todo> = new EventEmitter();

  todoTitle: string = '';
  todoDescription: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm($event)
  {
      this.onTodoCreate.emit(new Todo(this.todoTitle, this.todoDescription));

      this.todoTitle = '';
      this.todoDescription = '';
  }

}
