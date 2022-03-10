import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todos/effects';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './state/todos/todo.reducer';

@NgModule({
  declarations: [AppComponent, AddTodoComponent, ListTodoComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
