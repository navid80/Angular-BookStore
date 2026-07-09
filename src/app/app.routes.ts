import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { BookGrid } from './features/dashboard/book/book-grid/book-grid';

export const routes: Routes = [
{
    path: '',
    component: Dashboard,
    children: [
        {
            path: '',
            redirectTo: 'books',
            pathMatch: 'full'
        },
        {
            path: 'books',
            component: BookGrid
        }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
