import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDetailsDescription } from './p-details-description';

describe('PDetailsDescription', () => {
  let component: PDetailsDescription;
  let fixture: ComponentFixture<PDetailsDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDetailsDescription],
    }).compileComponents();

    fixture = TestBed.createComponent(PDetailsDescription);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
