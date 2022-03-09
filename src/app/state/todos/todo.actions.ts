import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ content: string }>()
);

export const editTodo = createAction(
  '[Todo Page] Edit Todo',
  props<{ todo: Todo }>()
);
