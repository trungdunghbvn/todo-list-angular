import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  rootURL = 'https://5bbffea259c0e1001337f1f8.mockapi.io';

  getListTodo() {
    return this.http.get(this.rootURL + '/todo-list');
  }

  addTodo(content: string) {
    return this.http.post(this.rootURL + '/todo-list', { content });
  }

  editTask(task: any) {
    return this.http.put(this.rootURL + '/task', { task });
  }

  updateTodo(todo: any) {
    return this.http.put(this.rootURL + '/todo-list/' + todo.id, {
      content: todo.content,
    });
  }

  deleteTask(taskId: any) {
    console.log('deleting task:::', taskId);
    return this.http.delete(`${this.rootURL}/task/${taskId}`);
  }
}
