import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { environment }  from '../../environments/environment';
import { Order }        from '../models/order';

@Injectable({ providedIn: 'root' })
export class OrderService {
  private base = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) {}

  create(bookId: number, quantity = 1) {
    return this.http.post<Order>(
      `${this.base}/`,
      { book: bookId, quantity }
    );
  }
}
