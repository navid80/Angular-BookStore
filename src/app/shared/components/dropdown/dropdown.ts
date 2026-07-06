import { Component, viewChild } from '@angular/core';
import { Menu, MenuContent, MenuItem, MenuTrigger } from '@angular/aria/menu'
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-dropdown',
  imports: [Menu, MenuContent, MenuItem, MenuTrigger, OverlayModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css',
})
export class Dropdown {
  formatMenu = viewChild<Menu<string>>('formatMenu');
}
