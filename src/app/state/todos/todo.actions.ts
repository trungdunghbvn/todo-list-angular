import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const addTodo = createAction(
  '[Todo Page] Add Todo',
  props<{ content: string }>()
);

export const getListTodoAction = createAction(
  '[Todo Page] Get List Todo'
);

export const getListTodoSuccess = createAction(
  '[Todo Page] Get List Todo Success',
  props<any>()
);

export const updateTodo = createAction(
  '[Todo Page] Update Todo',
  props<{ todo: Todo }>()
);

export const updateTodoSuccess = createAction(
  '[Todo Page] Update Todo Success',
  props<any>()
);

export const editTodo = createAction(
  '[Todo Page] Edit Todo',
  props<{ todo: Todo }>()
);

export const getTasksFailure = createAction(
  '[Todo Page] Get Tasks Failure',
  props<{ todo: Todo }>()
);

export const getTasksSuccess = createAction(
  '[Todo Page] Get Tasks Sucsess'
);
