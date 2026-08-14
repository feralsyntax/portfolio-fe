import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIntro } from './contact-intro';

describe('ContactIntro', () => {
  let component: ContactIntro;
  let fixture: ComponentFixture<ContactIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactIntro],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactIntro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
