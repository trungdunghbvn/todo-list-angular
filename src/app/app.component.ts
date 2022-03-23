import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';

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
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'todo-list';
  todoName: string = '';
  todoId: string = '';
  isUpdate: boolean = false;

  listTodo: Array<Todo> = [];

  constructor(private contexts: ChildrenOutletContexts) {}

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

  getAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
