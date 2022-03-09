import { createReducer, on } from '@ngrx/store';
import { addTodo, editTodo } from './todo.actions';
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
    if (state.todoId) {
      const newTodo = state.todos.map((todo) =>
        state.todoId === todo.id ? { id: state.todoId, content: content } : todo
      );
      return {
        ...state,
        todos: newTodo,
        todoId: '',
      };
    }
    return {
      ...state,
      todos: [...state.todos, { id: Date.now().toString(), content: content }],
      todoId: '',
    };
  }),

  on(editTodo, (state, { todo }) => {
    return {
      ...state,
      todoName: todo.content,
      todoId: todo.id,
    };
  })
);
