import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from '../model/list.model';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl: string = 'https://codetest-todo.azurewebsites.net/api/';

  constructor(private httpClient: HttpClient) { }

  getAllLists() {
    return this.httpClient.get<List[]>(this.baseUrl + 'TodoLists')
  }

  addList(newListName: string) {
    return this.httpClient.post(this.baseUrl + 'TodoLists', {name: newListName})
  }

  getTodosForList(id: number) {
    return this.httpClient.get<Todo[]>(this.baseUrl + 'TodoItems/list/' + id);
  }

  addTodoToList(todo: Todo) {
    return this.httpClient.post(this.baseUrl + 'TodoItems', todo)
  }

  removeTodoItem(todo: Todo) {
    return this.httpClient.delete(this.baseUrl + 'TodoItems/' + todo.id);
  }

  updateTodo(todo: Todo) {
    return this.httpClient.put(this.baseUrl + 'TodoItems/' + todo.id, todo)
  }
}
