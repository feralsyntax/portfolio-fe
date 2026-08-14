import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNav } from './about-nav';

describe('AboutNav', () => {
  let component: AboutNav;
  let fixture: ComponentFixture<AboutNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutNav],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
