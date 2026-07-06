import { Component } from '@angular/core';
import { Navbar } from "./layout/navbar/navbar";
import { Sidebar } from "./layout/sidebar/sidebar";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, Sidebar, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
