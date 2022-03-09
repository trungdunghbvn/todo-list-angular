import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ListTodoComponent } from './list-todo/list-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ListTodoComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
