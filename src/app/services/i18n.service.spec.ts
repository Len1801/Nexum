import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nService);
  });

  it('defaults to Spanish', () => {
    expect(service.lang()).toBe('es');
    expect(service.t('nav.contact')).toBe('Contacto');
  });

  it('switches language and updates document lang', () => {
    service.setLang('en');
    expect(service.lang()).toBe('en');
    expect(service.t('nav.contact')).toBe('Contact');
    expect(document.documentElement.lang).toBe('en');
  });

  it('falls back to the key itself for unknown keys', () => {
    expect(service.t('does.not.exist')).toBe('does.not.exist');
  });
});
