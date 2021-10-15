import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AllTodosComponent } from './all-todos/all-todos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ListSidebarComponent } from './list-sidebar/list-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTodosComponent,
    AddTodoComponent,
    HeaderComponent,
    ListSidebarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
