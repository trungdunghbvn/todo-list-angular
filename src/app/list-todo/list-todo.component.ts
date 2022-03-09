import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

export class Todo {
  name: string | undefined;
  id: string | undefined;
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {

  @Input() listTodo!: Array<Todo>;

  @Output() updateTodo = new EventEmitter<object>();

  constructor() {}

  ngOnInit(): void {}

  update(todo: object): void {
    this.updateTodo.emit(todo);
  }
}
