import {Todo} from './todo.model';

export class TodoList {
  public constructor(
    public title: string,
    public todos: Array<Todo> = [],
    public isCompleted: boolean = false
  ) {}

  public addTodo(todo: Todo): void
  {
    this.todos.push(todo);
  }

  public remove(todo: Todo): boolean
  {
    let result = false;

    const deletedItemIndex = this.todos.indexOf(todo);
    if (deletedItemIndex !== -1)
    {
      this.todos.splice(deletedItemIndex, 1);
      result = true;
    }

    return result;
  }

  public removeByIndex(index: number): boolean
  {
    let result = false;

    if ((this.todos.length) > index && (index >= 0))
    {
      this.todos.splice(index, 1);
      result = true;
    }

    return result;
  }
}
