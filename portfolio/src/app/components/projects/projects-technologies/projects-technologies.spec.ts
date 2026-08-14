import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTechnologies } from './projects-technologies';

describe('ProjectsTechnologies', () => {
  let component: ProjectsTechnologies;
  let fixture: ComponentFixture<ProjectsTechnologies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsTechnologies],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsTechnologies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
