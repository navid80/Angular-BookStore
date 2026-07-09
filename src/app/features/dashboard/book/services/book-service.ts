import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { BookModel } from '../models/book-model';

@Service()
export class BookService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'https://localhost:7254/api/admin/books';

    getAllBooks() {
        return this.http.get<BookModel[]>(this.apiUrl);
    }
}
