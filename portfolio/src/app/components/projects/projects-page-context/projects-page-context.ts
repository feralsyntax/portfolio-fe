import { Component } from '@angular/core';
import { projects, Project } from '../temp';

@Component({
  selector: 'app-projects-page-context',
  imports: [],
  templateUrl: './projects-page-context.html',
  styleUrl: './projects-page-context.scss',
})
export class ProjectsPageContext {
  projectsList: Project[] = projects;

  currentBatch = 0;

  loadMore(): void {
    this.currentBatch++;
  }
}
