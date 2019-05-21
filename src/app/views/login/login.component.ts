import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  username = '';
  constructor(private router: Router) {
  }
  doLogin() {
    localStorage.setItem('username', this.username);
    this.router.navigate(['/dashboard']);
  }
}
