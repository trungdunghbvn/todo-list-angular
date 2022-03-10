import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getTodoName,
  isUpdateTodo,
  getTodoId,
} from '../state/todos/todo.selectors';
import { addTodo, updateTodo } from '../state/todos/todo.actions';
import { AppState } from '../state/app.state';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  todoName$!: Observable<string>;
  isUpdate$!: Observable<boolean>;
  todoID!: string;
  value!: string;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getTodoName).subscribe((data) => {
      this.value = data;
    });

    this.store.select(getTodoId).subscribe((data) => {
      this.todoID = data;
    });

    this.isUpdate$ = this.store.select(isUpdateTodo);
  }

  addTodo(): void {
    if (this.todoID) {
      this.store.dispatch(
        updateTodo({ todo: { content: this.value, id: this.todoID } })
      );
    } else {
      this.store.dispatch(addTodo({ content: this.value }));
    }

    this.value = '';
  }
}
