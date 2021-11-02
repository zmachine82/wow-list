import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  sub: Subscription | undefined;

  constructor(private auth: AuthService, private router: Router) { }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.auth.isLoggedIn().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn
    })
  }

  signOut() {
    this.auth.logout().then(() => {
      this.router.navigate(['login'])
    })
  }

}
