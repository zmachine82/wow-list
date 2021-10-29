import { Component, Input, OnInit } from '@angular/core';
import { List } from '../model/list.model';
import { Todo } from '../model/todo.model';
import { ListService } from '../services/list.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {

  selectedList?: List;
  selectedListTodos: Todo[] = [];

  constructor(private listService: ListService, private todoService: TodoService) { }

  ngOnInit(): void {
    this.listService.selectedList.subscribe((listUpdated: List | undefined) => {

      if(listUpdated) {

        this.selectedList = listUpdated;

        this.todoService.getTodosForList(listUpdated.id).subscribe(todos => {
          this.selectedListTodos = todos
        })
      }

    })

  }

  removeTodo(todo: Todo) {
    this.todoService.removeTodoItem(todo).subscribe(() => {
      this.listService.selectedList.next(this.listService.selectedList.getValue())
    })
  }

  updateTodoItem(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(() => {
      this.listService.selectedList.next(this.listService.selectedList.getValue())
    })
  }

}
