import { Component, computed, input } from '@angular/core';
import { Project } from '../../../api/openapi';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-projects-content',
  imports: [DatePipe],
  templateUrl: './projects-content.html',
  styleUrl: './projects-content.scss',
})
export class ProjectsContent {
  readonly projects = input<Project[]>([]);

  protected readonly batchSize = 3;
  protected currentBatch = 1;

  protected readonly visibleProjects = computed(() =>
    this.projects().slice(0, this.currentBatch * this.batchSize),
  );

  protected loadMore(): void {
    this.currentBatch++;
  }
}
