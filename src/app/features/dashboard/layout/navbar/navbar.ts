import { Component } from '@angular/core';
import { Dropdown } from "../../../../shared/components/dropdown/dropdown";
import { SearchBar } from '../../../../shared/components/search-bar/search-bar';

@Component({
  selector: 'app-navbar',
  imports: [Dropdown, SearchBar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
