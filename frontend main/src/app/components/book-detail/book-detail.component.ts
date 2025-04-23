import { Component, OnInit } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { RouterModule }       from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService }        from '../../services/book.service';
import { Book }               from '../../models/book';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container w-50 mt-5" *ngIf="book">
      <h3>{{ book.title }}</h3>
      <p><strong>Автор:</strong> {{ book.author.name }}</p>
      <p><strong>Категория:</strong> {{ book.category?.name || '—' }}</p>
      <p><strong>Цена:</strong> {{ book.price | number:'1.2-2' }}</p>
      <p><strong>Описание:</strong> {{ book.description }}</p>
      <button class="btn btn-primary" (click)="goBack()">Назад</button>
    </div>
  `
})
export class BookDetailComponent implements OnInit {
  book: Book | null = null;
  constructor(
    private bs: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bs.getOne(id).subscribe(data => this.book = data);
  }
  goBack() {
    this.router.navigate(['/books']);
  }
}
