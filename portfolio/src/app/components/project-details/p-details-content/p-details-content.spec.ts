import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDetailsContent } from './p-details-content';

describe('PDetailsContent', () => {
  let component: PDetailsContent;
  let fixture: ComponentFixture<PDetailsContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDetailsContent],
    }).compileComponents();

    fixture = TestBed.createComponent(PDetailsContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
