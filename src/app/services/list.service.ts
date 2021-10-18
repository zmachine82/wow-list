import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ListMocker } from '../mocks/MoskList';
import { List } from '../model/list.model';
import { Todo } from '../model/todo.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  // @ts-ignore
  selectedList: BehaviorSubject<List> = new BehaviorSubject<List>(undefined);

  allLists: BehaviorSubject<List[]> = new BehaviorSubject<List[]>([]);

  constructor(private localStorageService: LocalStorageService) {
    this.getAllLists();
    this.allLists.pipe(tap(updatedList => {
      this.localStorageService.saveLists(updatedList)
    })).subscribe(() => {})
  }

  getAllLists() {
    this.allLists.next(this.localStorageService.loadLists());
  }

  selectList(list: List) {
    this.selectedList.next(list);
  }

  addList(list: List) {
    const newList = this.allLists.getValue();
    newList.push(list)
    this.allLists.next(newList);
  }

  updateList(list: List) {
    const listsNotUpdated = this.allLists.getValue().filter(l => l.name !== list.name);
    listsNotUpdated.push(list);
    this.allLists.next(listsNotUpdated)
  }

  addTodoToList(todo: Todo) {
    this.selectedList.getValue().todos.push(todo);
    this.updateList(this.selectedList.getValue())
  }

  removeTodoToList(todo: Todo) {
    this.selectedList.getValue().todos = this.selectedList.getValue().todos.filter(t => t !== todo);
    this.updateList(this.selectedList.getValue())
  }
}

