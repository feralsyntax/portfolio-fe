import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPageContext } from './projects-page-context';

describe('ProjectsPageContext', () => {
  let component: ProjectsPageContext;
  let fixture: ComponentFixture<ProjectsPageContext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsPageContext],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsPageContext);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
