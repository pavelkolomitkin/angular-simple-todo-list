import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryItemComponent } from './category-list/category-item/category-item.component';
import { CategoryItemFormComponent } from './category-list/category-item-form/category-item-form.component';
import { CategoryDetailsComponent } from './category-list/category-details/category-details.component';
import { TodoListListComponent } from './todo-list-list/todo-list-list.component';
import { TodoListComponent } from './todo-list-list/todo-list/todo-list.component';
import { TodoComponent } from './todo-list-list/todo-list/todo/todo.component';
import { TodoFormComponent } from './todo-list-list/todo-list/todo-form/todo-form.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    CategoryItemComponent,
    CategoryItemFormComponent,
    CategoryDetailsComponent,
    TodoListListComponent,
    TodoListComponent,
    TodoComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
