import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFeatures } from './projects-features';

describe('ProjectsFeatures', () => {
  let component: ProjectsFeatures;
  let fixture: ComponentFixture<ProjectsFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsFeatures],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsFeatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
