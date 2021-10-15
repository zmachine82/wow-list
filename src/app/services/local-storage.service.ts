import { Injectable } from '@angular/core';
import { List } from '../model/list.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveLists(lists: List[]) {
    localStorage.setItem('my_storage', JSON.stringify(lists))
  }

  loadLists(): List[] {
    const storage = localStorage.getItem('my_storage');
    if(storage) {
      return JSON.parse(storage)

    }

    return [];
  }

  updateList(list: List) {
    const updatedLists = this.loadLists().map(l => {
      if(l.name === list.name) {
        return list
      }
      return l;

    })

    this.saveLists(updatedLists);
  }


}
