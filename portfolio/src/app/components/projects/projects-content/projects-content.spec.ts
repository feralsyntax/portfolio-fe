import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsContent } from './projects-content';

describe('ProjectsContent', () => {
  let component: ProjectsContent;
  let fixture: ComponentFixture<ProjectsContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsContent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
