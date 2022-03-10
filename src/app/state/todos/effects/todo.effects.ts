import { updateTodo } from './../todo.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { TodoService } from '../../../_services';
import * as todoActions from '../todo.actions';

@Injectable()
export class TodoEffects {

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) {}

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.addTodo),
      exhaustMap(action =>
        this.todoService.addTodo(action.content).pipe(
          map(response => {
            return todoActions.getTasksSuccess()
          }),
          catchError((error: any) => of(todoActions.getTasksFailure(error))))
      )
    )
  );

  getListTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.getListTodoAction),
      exhaustMap(action =>
        this.todoService.getListTodo().pipe(
          map(response => {
            return todoActions.getListTodoSuccess({response})
          }),
          catchError((error: any) => of(todoActions.getTasksFailure(error))))
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(todoActions.updateTodo),
      exhaustMap(action =>
        this.todoService.updateTodo(action.todo).pipe(
          map(response => {
            return todoActions.updateTodoSuccess({response})
          }),
          catchError((error: any) => of(todoActions.getTasksFailure(error))))
      )
    )
  );
}
