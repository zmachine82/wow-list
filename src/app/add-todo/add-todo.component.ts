import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  addingATodo = false;
  newTodoTask = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  addTodo(event?: MouseEvent) {
    this.listService.addTodoToList(this.newTodoTask);
    this.newTodoTask = '';
    this.addingATodo = false;
    event?.stopPropagation();
  }

  cancel(event: MouseEvent) {
    event.stopPropagation();
    this.addingATodo = false;
  }

  flipAddingATodo() {
    if(!this.addingATodo) {
      this.addingATodo = !this.addingATodo
    }
  }

}
