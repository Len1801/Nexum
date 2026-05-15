import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  constructor(public i18n: I18nService) {}
}
