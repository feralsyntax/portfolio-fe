import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDetailsTitle } from './p-details-title';

describe('PDetailsTitle', () => {
  let component: PDetailsTitle;
  let fixture: ComponentFixture<PDetailsTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDetailsTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(PDetailsTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
