 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/login-request';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  request: LoginRequest = new LoginRequest();

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.auth.login(this.request.username, this.request.password).then(user => {
      if(user) {
        this.router.navigate([''])
      }
    });
  }

}
