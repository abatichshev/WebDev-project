import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookService {
  private url = `${environment.apiUrl}/books`;
  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + '/');
  }

  getOne(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}/`);
  }

  create(book: Book) {
    return this.http.post<Book>(this.url + '/', book);
  }

  update(book: Book) {
    return this.http.put(`${this.url}/${book.id}/`, book);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}/`);
  }
}
