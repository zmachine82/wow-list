import { Component, Input, OnInit } from '@angular/core';
import { List } from '../model/list.model';
import { Todo } from '../model/todo.model';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {
  constructor(public listService: ListService) { }

  ngOnInit(): void {

  }

  removeTodo(todo: Todo) {
    this.listService.removeTodoToList(todo)
  }

}
