import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  constructor(public i18n: I18nService) {}
}
