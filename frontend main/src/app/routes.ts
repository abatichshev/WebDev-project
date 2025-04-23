
import { Routes } from '@angular/router';
import { LoginComponent }      from './components/login/login.component';
import { BookListComponent }   from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

export const routes: Routes = [
  { path: 'login',     component: LoginComponent },
  { path: 'books',     component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: '',          redirectTo: '/books', pathMatch: 'full' },
  { path: '**',        redirectTo: '/books' },
];
