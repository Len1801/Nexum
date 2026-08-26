import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { I18nService } from '../../services/i18n.service';

type FormState = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly email = 'info@nexumpropertyservices.com';
  state = signal<FormState>('idle');

  private fb = new FormBuilder();
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    condo: ['', Validators.required],
    service: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(public i18n: I18nService) {}

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.state.set('loading');
    const payload = this.form.value;
    setTimeout(() => {
      console.log('Contact form submitted', payload);
      this.state.set('success');
    }, 1500);
  }
}
