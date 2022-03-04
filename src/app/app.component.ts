import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
  text: string = '';
  listTodo: Array<string>  = [];

  constructor() {}

  getTextChange(text: string) {
    console.log(text);
  }
}
