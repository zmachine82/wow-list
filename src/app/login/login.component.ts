 import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../model/login-request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  request: LoginRequest = new LoginRequest();

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log('logging in as ' + this.request.username);
  }

}
