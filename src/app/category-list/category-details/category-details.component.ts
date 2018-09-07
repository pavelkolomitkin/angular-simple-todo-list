import {AfterContentChecked, AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Category} from '../../models/category.model';
import {TodoList} from '../../models/todolist.model';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit, AfterViewChecked {

  @Input() category: Category = null;
  @Output('onDelete') onDeleteCategory: EventEmitter<Category> = new EventEmitter<Category>();

  @ViewChild('editableTitleInput') editableTitleElement: ElementRef;

  isTitleEditing: boolean = false;

  editableTitle: string = '';

  constructor() {}

  ngOnInit() {

  }

  onTodoListCreateHandler(todoList: TodoList)
  {
    this.category.addTodoList(todoList);
  }

  onDeleteCategoryHandler(category: Category)
  {
      this.onDeleteCategory.emit(category);
  }

  onEditTitleStartHandler($event)
  {
      this.editableTitle = this.category.title;

      this.isTitleEditing = true;
  }

  onEditTitleEnterKeyUp(value: string)
  {
      this.processEditingTitle(value);
  }

  onEditTitleBlurHandler(value: string)
  {
      this.processEditingTitle(value);
  }

  private processEditingTitle(value)
  {
      if (value.trim() !== '' && this.isTitleEditing)
      {
          this.category.title = value.trim();
          this.isTitleEditing = false;
      }
  }

  onEditTitleEscapeHandler()
  {
      this.isTitleEditing = false;
  }


    ngAfterViewChecked(): void {
        if (this.editableTitleElement)
        {
            this.editableTitleElement.nativeElement.focus();
        }
    }

}
