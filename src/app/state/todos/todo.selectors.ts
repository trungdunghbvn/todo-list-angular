import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState } from './todo.reducer';

export const selectTodos = (state: AppState) => state.todos;

export const getListTodos = createSelector(
  selectTodos,
  (state: TodoState) => state.todos
);

export const getTodoName = createSelector(
  selectTodos,
  (state: TodoState) => state.todoName
);

export const isUpdateTodo = createSelector(selectTodos, (state: TodoState) => {
  if (state.todoId) {
    return true;
  }
  return false;
});
