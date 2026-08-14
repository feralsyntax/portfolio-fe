import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsIndustries } from './projects-industries';

describe('ProjectsIndustries', () => {
  let component: ProjectsIndustries;
  let fixture: ComponentFixture<ProjectsIndustries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsIndustries],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsIndustries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
