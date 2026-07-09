import { Grid, GridCell, GridCellWidget, GridRow } from '@angular/aria/grid';
import { OverlayModule } from '@angular/cdk/overlay';
import { Component, ElementRef, HostListener, inject, OnInit, signal, viewChild} from '@angular/core';
import { BookService } from '../services/book-service';
import { BookModel } from '../models/book-model';

@Component({
  selector: 'app-book-grid',
  imports: [Grid, GridCell, GridRow, GridCellWidget, OverlayModule],
  templateUrl: './book-grid.html',
  styleUrl: './book-grid.css',
})
export class BookGrid implements OnInit {
  private readonly bookService = inject(BookService);

  books = signal<BookModel[]>([]);
  isLoading = signal<boolean>(false);
  errorMesage = signal<string | null>(null);

  isFilterOpen = signal<boolean>(false);
  filterContainer = viewChild<ElementRef>('filterContainer');
  filterBtn = viewChild<ElementRef>('filterBtn');

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.isLoading.set(true);
    this.errorMesage.set(null);

    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.books.set(books)
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMesage.set('خطا در دریافت لیست کتاب‌ها');
        this.isLoading.set(false);
      }
    })
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.isFilterOpen()) return;

    const target = event.target as Node;

    const clickedButton = this.filterBtn()?.nativeElement.contains(target);

    const clickedInside = this.filterContainer()?.nativeElement.contains(target);

    if (!clickedInside && !clickedButton) {
      this.isFilterOpen.set(false);
    }
  }
}