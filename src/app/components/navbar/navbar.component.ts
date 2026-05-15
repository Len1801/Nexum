import { Component, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  menuOpen = signal(false);

  constructor(public i18n: I18nService) {}

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }
}
