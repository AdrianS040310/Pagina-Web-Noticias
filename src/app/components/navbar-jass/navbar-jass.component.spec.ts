import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarJassComponent } from './navbar-jass.component';

describe('NavbarJassComponent', () => {
  let component: NavbarJassComponent;
  let fixture: ComponentFixture<NavbarJassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarJassComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavbarJassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
