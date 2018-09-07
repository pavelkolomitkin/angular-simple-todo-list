import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Input() categories: Array<Category> = [];

  @Output('onCategorySelected') onCategorySelected: EventEmitter<Category> = new EventEmitter<Category>();

  selectedItem: Category = null;

  constructor() { }

  ngOnInit()
  {

  }

  onCreateCategoryHandler(category: Category)
  {
    this.categories.push(category);
  }

  onSelectCategoryHandler(category: Category)
  {
    this.selectedItem = category;
    this.onCategorySelected.emit(this.selectedItem);
  }


}
