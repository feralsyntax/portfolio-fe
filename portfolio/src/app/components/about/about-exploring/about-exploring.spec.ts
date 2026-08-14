import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExploring } from './about-exploring';

describe('AboutExploring', () => {
  let component: AboutExploring;
  let fixture: ComponentFixture<AboutExploring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutExploring],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutExploring);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
