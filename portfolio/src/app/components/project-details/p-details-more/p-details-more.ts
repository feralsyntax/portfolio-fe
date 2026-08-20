import { Component, input } from '@angular/core';
import { Project } from '../../../api/openapi';

@Component({
  selector: 'app-p-details-more',
  imports: [],
  templateUrl: './p-details-more.html',
  styleUrl: './p-details-more.scss',
})
export class PDetailsMore {
  readonly moreProjects = input<Project[]>([]);
}
