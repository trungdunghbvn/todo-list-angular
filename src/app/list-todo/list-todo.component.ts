import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { editTodo } from '../state/todos/todo.actions';
import { getListTodos } from '../state/todos/todo.selectors';
import { Todo } from '../state/todos/todo.model';


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss'],
})
export class ListTodoComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select(getListTodos)
  }

  update(todo: any): void {
    this.store.dispatch(editTodo({todo: todo}));
  }

}
