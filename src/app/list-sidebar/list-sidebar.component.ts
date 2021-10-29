import { Component, OnInit } from '@angular/core';
import { List } from '../model/list.model';
import { ListService } from '../services/list.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-list-sidebar',
  templateUrl: './list-sidebar.component.html',
  styleUrls: ['./list-sidebar.component.css']
})
export class ListSidebarComponent implements OnInit {


  userLists: List[] = [];

  newListName = '';

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.listService.allLists.subscribe(allLists => {
      this.userLists = allLists;

    })

  }

  selectList(list: List) {
    this.listService.selectList(list);
  }

  addList() {
    this.listService.addList(this.newListName)
    this.newListName = '';
  }



  }

