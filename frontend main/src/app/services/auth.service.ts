import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$$ = new BehaviorSubject<User | null>(null);
  public user$ = this.user$$.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.user$$.next({ accessToken: token } as User);
    }
  }

  login(username: string, password: string) {
    return this.http
      .post<{ access: string }>(
        `${environment.apiUrl}/token/`,
        { username, password }
      )
      .pipe(
        tap(res => {
          localStorage.setItem('accessToken', res.access);
          this.user$$.next({ username, accessToken: res.access } as User);
        })
      );
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.user$$.next(null);
  }

  get token(): string | null {
    return localStorage.getItem('accessToken');
  }
}
