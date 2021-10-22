import { Component, OnInit } from '@angular/core';
import { signupForm } from '../model/sign-up.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


request: signupForm = new signupForm()
  constructor() { }

  ngOnInit(): void {
  }
checkConfirmation(){
   return this.request.password !== this.request.passwordConfirmation
}
onSubmit(){}
}
