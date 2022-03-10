import { Component } from '@angular/core';

export class Todo {
  name: string | undefined;
  id: string | undefined;
}

function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  );
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
  todoName: string = '';
  todoId: string = '';
  isUpdate: boolean = false;

  listTodo: Array<Todo> = [];

  constructor() {
    console.log('hello1234');
  }

  getTextChange(text: string) {
    this.todoName = text;
  }

  addTodoFn() {
    let todoObj = new Todo();

    todoObj.name = this.todoName;
    todoObj.id = this.todoId || guidGenerator();
    let index = this.listTodo.findIndex((todo) => todo.id === this.todoId);

    if (this.todoId && index >= 0) {
      // update todo
      this.listTodo[index].name = this.todoName;
    } else {
      // add new todo
      this.listTodo.push(todoObj);
    }

    this.todoName = '';
    this.todoId = '';
    this.isUpdate = false;
  }

  updateTodo(todo: any) {
    this.todoName = todo?.name;
    this.todoId = todo?.id;
    this.isUpdate = true;
  }
}
