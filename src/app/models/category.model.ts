import {TodoList} from './todolist.model';

export class Category {
  public constructor(
    public title: string,
    public todoLists: Array<TodoList> = []
    ) {}

  public addTodoList(list: TodoList): void
  {
    this.todoLists.push(list);
  }

  public removeTodoList(list: TodoList): boolean
  {
    let result = false;

    const deletedItemIndex = this.todoLists.indexOf(list);
    if (deletedItemIndex !== -1)
    {
      this.todoLists.splice(deletedItemIndex, 1);
      result = true;
    }

    return result;
  }

  public removeTodoListByIndex(index: number): boolean
  {
    let result = false;

    if ((index >= 0) && (this.todoLists.length > index))
    {
      this.todoLists.splice(index, 1);
      result = true;
    }

    return result;
  }
}
