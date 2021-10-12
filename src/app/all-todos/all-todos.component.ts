import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoStateService } from '../services/todo-state.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoStateService: TodoStateService) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todos = this.todoStateService.getAllTodos();
  }

}
