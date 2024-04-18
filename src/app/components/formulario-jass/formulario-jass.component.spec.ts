import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioJassComponent } from './formulario-jass.component';

describe('FormularioJassComponent', () => {
  let component: FormularioJassComponent;
  let fixture: ComponentFixture<FormularioJassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioJassComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormularioJassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
