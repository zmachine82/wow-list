import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ListMocker } from '../mocks/MoskList';
import { List } from '../model/list.model';
import { Todo } from '../model/todo.model';
import { LocalStorageService } from './local-storage.service';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  // @ts-ignore
  selectedList: BehaviorSubject<List> = new BehaviorSubject<List>();

  allLists: BehaviorSubject<List[]> = new BehaviorSubject<List[]>([]);

  constructor(private todoService: TodoService) {
    this.getAllLists();
  }

  getAllLists() {
    this.todoService.getAllLists().subscribe(data => {
      this.allLists.next(data)
    })
  }

  selectList(list: List) {
    this.selectedList.next(list);
  }

  addList(newListName: string) {
    this.todoService.addList(newListName).subscribe(result => {
      this.getAllLists();
    })

  }

  updateList(list: List) {
    const listsNotUpdated = this.allLists.getValue().filter(l => l.name !== list.name);
    listsNotUpdated.push(list);
    this.allLists.next(listsNotUpdated)
  }

  addTodoToList(todoTask: string) {
    const newTodo = new Todo(undefined, todoTask, false, this.selectedList.getValue().id)

    this.todoService.addTodoToList(newTodo).subscribe(() => {
      this.selectedList.next(this.selectedList.getValue())
    });
  }

  removeTodoToList(todo: Todo) {
    // this.selectedList.getValue().todos = this.selectedList.getValue().todos.filter(t => t !== todo);
    // this.updateList(this.selectedList.getValue())
  }
}

