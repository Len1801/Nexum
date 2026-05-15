import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [],
  templateUrl: './properties.component.html',
})
export class PropertiesComponent {
  constructor(public i18n: I18nService) {}
}
