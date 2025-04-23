import { Component, OnInit } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { RouterModule }       from '@angular/router';
import { BookService }        from '../../services/book.service';
import { OrderService }       from '../../services/order.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <div class="row g-3">
        <div class="col-4" *ngFor="let book of books">
          <div class="card h-100">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ book.title }}</h5>
              <p class="card-text mb-1">Автор: {{ book.author.name }}</p>
              <p class="card-text mb-3">Цена: {{ book.price | number:'1.2-2' }}</p>
              <button class="btn btn-success mt-auto"
                      (click)="buy(book.id!)">
                Купить
              </button>
              <button class="btn btn-link mt-2"
                      [routerLink]="['/books', book.id]">
                Подробнее
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bs: BookService, private os: OrderService) {}
  ngOnInit() {
    this.bs.getAll().subscribe(data => this.books = data);
  }
  buy(id: number) {
    this.os.create(id).subscribe({
      next: () => alert('Заказ оформлен!'),
      error: () => alert('Не удалось оформить заказ')
    });
  }
}
