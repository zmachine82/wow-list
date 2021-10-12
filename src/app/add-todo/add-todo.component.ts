import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoStateService } from '../services/todo-state.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  addingATodo = false;
  newTodoTask = '';

  @Output() updated = new EventEmitter<void>();

  constructor(private todoStateService: TodoStateService) { }

  ngOnInit(): void {
  }

  addTodo(event?: MouseEvent) {
    this.todoStateService.addTodo(new Todo(this.newTodoTask));
    this.newTodoTask = '';
    this.addingATodo = false;
    event?.stopPropagation();
    this.updated.emit()
  }

  cancel(event: MouseEvent) {
    event.stopPropagation();
    this.addingATodo = false;
    this.updated.emit()
  }

  flipAddingATodo() {
    if(!this.addingATodo) {
      this.addingATodo = !this.addingATodo
    }
  }

}
