import { Injectable } from '@angular/core';
import { ListMocker } from '../mocks/MoskList';
import { List } from '../model/list.model';
import { Todo } from '../model/todo.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private userLists: List[] = [
    ListMocker.fakeList(),
    ListMocker.fakeList(),
    ListMocker.fakeList(),
    ListMocker.fakeList(),
    ListMocker.fakeList(),
  ];

  selectedList!: List;

  constructor(private localStorageService: LocalStorageService) {

  }

  getAllLists() {
    return this.localStorageService.loadLists();
  }

  selectList(list: List) {
    this.selectedList = list;
  }

  addList(list: List) {
    const currentLists = this.localStorageService.loadLists();
    currentLists.push(list);
    this.localStorageService.saveLists(currentLists);
  }

  addTodoToList(todo: Todo) {
    this.selectedList.todos.push(todo);
    this.localStorageService.updateList(this.selectedList);
  }

  removeTodoToList(todo: Todo) {
    this.selectedList.todos = this.selectedList.todos.filter(t => t !== todo);
    this.localStorageService.updateList(this.selectedList);
  }
}
