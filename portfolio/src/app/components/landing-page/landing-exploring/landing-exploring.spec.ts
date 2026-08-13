import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingExploring } from './landing-exploring';

describe('LandingExploring', () => {
  let component: LandingExploring;
  let fixture: ComponentFixture<LandingExploring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingExploring],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingExploring);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
