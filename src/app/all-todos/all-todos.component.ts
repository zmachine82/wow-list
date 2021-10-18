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

  selectedList?: List;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.selectedList.subscribe(listUpdated => {
      this.selectedList = listUpdated;
    })

  }

  removeTodo(todo: Todo) {
    this.listService.removeTodoToList(todo)
  }

}
