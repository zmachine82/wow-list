import { Component, OnInit } from '@angular/core';
import { authState } from '@angular/fire/auth';
import { signupForm } from '../model/sign-up.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


request: signupForm = new signupForm()
  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }
checkConfirmation(){
   return this.request.password !== this.request.passwordConfirmation
}
onSubmit(){
  this.authService.signup(this.request.email, this.request.password);
}
}
