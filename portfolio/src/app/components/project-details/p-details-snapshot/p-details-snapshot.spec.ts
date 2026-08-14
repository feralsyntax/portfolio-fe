import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDetailsSnapshot } from './p-details-snapshot';

describe('PDetailsSnapshot', () => {
  let component: PDetailsSnapshot;
  let fixture: ComponentFixture<PDetailsSnapshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDetailsSnapshot],
    }).compileComponents();

    fixture = TestBed.createComponent(PDetailsSnapshot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
