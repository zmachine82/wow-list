import { Injectable } from '@angular/core';
import { TodoMocker } from '../mocks/MockTodo';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {
  private todos: Todo[] = [
    TodoMocker.fakeTodo(),
    TodoMocker.fakeTodo(),
    TodoMocker.fakeTodo(),
    TodoMocker.fakeTodo(),
  ];

  constructor() { }

  getAllTodos() {
    return [...this.todos];
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

}

