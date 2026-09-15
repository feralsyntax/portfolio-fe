import { Component, input } from '@angular/core';
import { Project } from '../../../api/openapi';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-p-details-more',
  imports: [RouterLink],
  templateUrl: './p-details-more.html',
  styleUrl: './p-details-more.scss',
})
export class PDetailsMore {
  readonly moreProjects = input<Project[]>([]);
}
