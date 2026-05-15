import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  constructor(public i18n: I18nService) {}
}
