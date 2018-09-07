import * as $ from "jquery";
import { Component } from '@angular/core';
import {Category} from './models/category.model';
import { CATEGORIES } from './data.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Array<Category> = CATEGORIES;

  selectedCategory: Category = null;

  onCategorySelectHandler(category: Category)
  {
      console.log(category);
      this.selectedCategory = category;
  }
}
