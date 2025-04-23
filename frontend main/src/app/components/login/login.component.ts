import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService }  from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container w-25 mt-5">
      <h3 class="mb-3">Авторизация</h3>
      <form (ngSubmit)="submit()" #f="ngForm">
        <input name="username" [(ngModel)]="username"
               class="form-control mb-2" placeholder="Username" required>
        <input name="password" [(ngModel)]="password" type="password"
               class="form-control mb-3" placeholder="Password" required>
        <button [disabled]="f.invalid" class="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private auth: AuthService, private router: Router) {}
  submit() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/books']),
      error: () => alert('Ошибка авторизации')
    });
  }
}
