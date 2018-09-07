import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../models/category.model';
import {TodoList} from '../../models/todolist.model';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  @Input() category: Category = null;

  constructor() { }

  ngOnInit() {
  }

  onTodoListCreateHandler(todoList: TodoList)
  {
    this.category.addTodoList(todoList);
  }

}
