import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { TodoService } from '../Services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {

  @Input() todoName: string | undefined;

  @Input()
  isUpdate: boolean = false;

  @Output() updateText = new EventEmitter<string>();

  @Output() addTodoFn = new EventEmitter<any>();

  public counter  = 0;

  constructor(private todo: TodoService) {}

  ngOnInit(): void {
    this.counter = this.todo.counter;
  }

  changeTodo(value: string): void {
    this.updateText.emit(value);
  }

  addTodo(): void {
    this.addTodoFn.emit();
  }
}
