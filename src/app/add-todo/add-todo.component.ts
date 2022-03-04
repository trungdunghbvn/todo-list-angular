import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {


  @Input() text: string | undefined;

  @Output() updateText = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  modelChangeFn(value: string): void {
    console.log(value);
  }
  addTodo(): void {
    this.updateText.emit(this.text);
  }
}
