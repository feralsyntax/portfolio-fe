import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSkills } from './contact-skills';

describe('ContactSkills', () => {
  let component: ContactSkills;
  let fixture: ComponentFixture<ContactSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSkills],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
