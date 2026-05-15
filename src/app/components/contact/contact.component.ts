import { Component, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

type FormState = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly email = 'info@nexumpropertyservices.com';
  state = signal<FormState>('idle');

  constructor(public i18n: I18nService) {}

  onSubmit(e: Event) {
    e.preventDefault();
    this.state.set('loading');
    setTimeout(() => this.state.set('success'), 1500);
  }
}
