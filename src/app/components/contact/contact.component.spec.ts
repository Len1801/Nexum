import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let component: ContactComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('starts idle with an empty form', () => {
    expect(component.state()).toBe('idle');
    expect(component.form.value).toEqual({
      name: '',
      email: '',
      condo: '',
      service: '',
      message: '',
    });
  });

  it('captures the values the user types before submitting', fakeAsync(() => {
    component.form.setValue({
      name: 'Juan Pérez',
      email: 'juan@example.com',
      condo: 'Torres del Sol',
      service: 'Administración General',
      message: 'Necesitamos una cotización.',
    });

    component.onSubmit();
    expect(component.state()).toBe('loading');

    tick(1500);
    expect(component.state()).toBe('success');
    expect(component.form.value.email).toBe('juan@example.com');
  }));
});
