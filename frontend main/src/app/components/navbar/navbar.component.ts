import { Component } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService }  from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand bg-light p-2 mb-4">
      <a class="navbar-brand" routerLink="/">Bookstore</a>
      <div class="ms-auto">
        <button *ngIf="!(auth.user$ | async)"
                class="btn btn-outline-primary"
                routerLink="/login">
          Login
        </button>
        <button *ngIf="auth.user$ | async"
                class="btn btn-outline-danger"
                (click)="logout()">
          Logout
        </button>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  constructor(public auth: AuthService, private router: Router) {}
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}