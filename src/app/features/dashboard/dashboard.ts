import { Component } from '@angular/core';
import { Navbar } from "./layout/navbar/navbar";
import { Sidebar } from "./layout/sidebar/sidebar";
import { RouterOutlet } from "@angular/router";
import { BookGrid } from './book/book-grid/book-grid';


@Component({
  selector: 'app-dashboard',
  imports: [Navbar, Sidebar, RouterOutlet, BookGrid],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
