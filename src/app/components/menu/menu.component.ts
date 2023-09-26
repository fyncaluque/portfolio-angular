import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  isNavCollapsed = true;

  toggleNav() {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  closeNav() {
    this.isNavCollapsed = true;
  }
}
