import { createReducer, on } from '@ngrx/store';
import {
  addTodo,
  updateTodo,
  editTodo,
  getListTodoSuccess,
  updateTodoSuccess
} from './todo.actions';
import { Todo } from './todo.model';

export interface TodoState {
  todos: Todo[];
  todoName: string;
  todoId: string;
  status: string;
}

export const initialState: TodoState = {
  todos: [],
  todoName: '',
  todoId: '',
  status: 'pending',
};

export const todoReducer = createReducer(
  // Supply the initial state
  initialState,
  // Add the new todo to the todos array
  on(addTodo, (state, { content }) => {
    return {
      ...state,
      todos: [...state.todos, { id: Date.now().toString(), content: content }],
      todoId: '',
    };
  }),

  on(updateTodo, (state, { todo }) => {
    const newTodo = state.todos.map((item) =>
      todo.id === item.id ? todo : item
    );
    return {
      ...state,
      todos: newTodo,
      todoId: '',
    };
  }),

  on(editTodo, (state, { todo }) => {
    return {
      ...state,
      todoName: todo.content,
      todoId: todo.id,
    };
  }),

  on(getListTodoSuccess, (state, result) => {
    return {
      ...state,
      todos: result.response,
    };
  }),

  on(updateTodoSuccess, (state, result) => {
    return {
      ...state,
    };
  })
);
