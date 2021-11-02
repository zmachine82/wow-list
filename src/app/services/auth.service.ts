import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {

  }

  isLoggedIn() {
    return authState(this.auth).pipe(map(userData => !!userData));
  }


  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  logout() {
    return signOut(this.auth);
  }

  signup(userEmail: string, password: string) {
    console.log(userEmail, password)
    return createUserWithEmailAndPassword(this.auth, userEmail, password).then(result => {
      console.log(result)
    })
  }
}
