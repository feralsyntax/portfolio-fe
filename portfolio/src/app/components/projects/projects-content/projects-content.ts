import { Component } from '@angular/core';
import { projects, Project } from '../temp';

@Component({
  selector: 'app-projects-content',
  imports: [],
  templateUrl: './projects-content.html',
  styleUrl: './projects-content.scss',
})
export class ProjectsContent {
  projectsList: Project[] = projects;

  currentBatch = 0;

  loadMore(): void {
    this.currentBatch++;
  }
}
