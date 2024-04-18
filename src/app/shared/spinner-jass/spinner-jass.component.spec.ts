import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerJassComponent } from './spinner-jass.component';

describe('SpinnerJassComponent', () => {
  let component: SpinnerJassComponent;
  let fixture: ComponentFixture<SpinnerJassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerJassComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SpinnerJassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
