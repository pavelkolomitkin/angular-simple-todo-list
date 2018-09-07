import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../../models/category.model';

@Component({
  selector: '[app-category-item]',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  @Input() category: Category = null;

  @Output('onSelect') onSelectItem: EventEmitter<Category> = new EventEmitter<Category>();

  constructor() { }

  ngOnInit() {
  }


  onClickHandler($event)
  {
    this.onSelectItem.emit(this.category);
  }

}
