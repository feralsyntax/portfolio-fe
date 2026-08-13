import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFeatured } from './landing-featured';

describe('LandingFeatured', () => {
  let component: LandingFeatured;
  let fixture: ComponentFixture<LandingFeatured>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingFeatured],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingFeatured);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
