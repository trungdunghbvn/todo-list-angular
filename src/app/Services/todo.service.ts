import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public counter = 0;

  constructor() {}

  public binhphuong(n: number): number {
    return n * n;
  }
}
