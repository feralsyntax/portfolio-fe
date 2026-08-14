import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDetailsMore } from './p-details-more';

describe('PDetailsMore', () => {
  let component: PDetailsMore;
  let fixture: ComponentFixture<PDetailsMore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDetailsMore],
    }).compileComponents();

    fixture = TestBed.createComponent(PDetailsMore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
