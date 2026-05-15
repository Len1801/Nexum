import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(public i18n: I18nService) {}
}
