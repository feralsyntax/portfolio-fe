import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDetailsNav } from './p-details-nav';

describe('PDetailsNav', () => {
  let component: PDetailsNav;
  let fixture: ComponentFixture<PDetailsNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDetailsNav],
    }).compileComponents();

    fixture = TestBed.createComponent(PDetailsNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
