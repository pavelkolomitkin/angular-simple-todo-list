import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from '../../models/category.model';

@Component({
  selector: 'app-category-item-form',
  templateUrl: './category-item-form.component.html',
  styleUrls: ['./category-item-form.component.css']
})
export class CategoryItemFormComponent implements OnInit {

  @Output('onCategoryCreate') createCategoryEmitter: EventEmitter<Category> = new EventEmitter();

  categoryName: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm()
  {
    const category = new Category(this.categoryName);
    this.categoryName = '';

    this.createCategoryEmitter.emit(category);
  }

}
