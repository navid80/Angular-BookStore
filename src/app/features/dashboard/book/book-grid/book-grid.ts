import { Grid, GridCell, GridCellWidget, GridRow } from '@angular/aria/grid';
import { OverlayModule } from '@angular/cdk/overlay';
import { Component, ElementRef, HostListener, signal, viewChild} from '@angular/core';

@Component({
  selector: 'app-book-grid',
  imports: [Grid, GridCell, GridRow, GridCellWidget, OverlayModule],
  templateUrl: './book-grid.html',
  styleUrl: './book-grid.css',
})
export class BookGrid {
  books = signal(books);
  isFilterOpen = signal<boolean>(false);
  filterContainer = viewChild<ElementRef>('filterContainer');
  filterBtn = viewChild<ElementRef>('filterBtn');

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
const books = [
  {
    id: 1,
    title: 'شازده کوچولو',
    category: 'رمان',
    author: 'آنتوان دو سنت اگزوپری',
    publishDate: '1943-04-06'
  },
  {
    id: 2,
    title: 'سمفونی مردگان',
    category: 'ادبیات',
    author: 'عباس معروفی',
    publishDate: '1989-01-01'
  },
  {
    id: 3,
    title: 'کیمیاگر',
    category: 'رمان',
    author: 'پائولو کوئیلو',
    publishDate: '1988-01-01'
  },
  {
    id: 4,
    title: 'اثر مرکب',
    category: 'موفقیت',
    author: 'دارن هاردی',
    publishDate: '2010-01-01'
  },
  {
    id: 5,
    title: 'هنر شفاف اندیشیدن',
    category: 'روانشناسی',
    author: 'رولف دوبلی',
    publishDate: '2011-01-01'
  },
  {
    id: 6,
    title: 'صد سال تنهایی',
    category: 'رمان',
    author: 'گابریل گارسیا مارکز',
    publishDate: '1967-05-30'
  },
  {
    id: 7,
    title: 'ملت عشق',
    category: 'عاشقانه',
    author: 'الیف شافاک',
    publishDate: '2009-03-01'
  },
  {
    id: 8,
    title: 'جزء از کل',
    category: 'رمان',
    author: 'استیو تولتز',
    publishDate: '2008-01-01'
  },
  {
    id: 9,
    title: 'بی‌شعوری',
    category: 'روانشناسی',
    author: 'خاویر کرمنت',
    publishDate: '1990-01-01'
  },
  {
    id: 10,
    title: 'قدرت عادت',
    category: 'توسعه فردی',
    author: 'چارلز دوهیگ',
    publishDate: '2012-02-28'
  }
];