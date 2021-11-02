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
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PipesPipe } from './pipes/pipes.pipe';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import {  getAuth, provideAuth } from '@angular/fire/auth';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    AllTodosComponent,
    AddTodoComponent,
    HeaderComponent,
    ListSidebarComponent,
    LoginComponent,
    MainComponent,
    SignUpComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: '', component: MainComponent, canActivate: [AuthGuard]},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
