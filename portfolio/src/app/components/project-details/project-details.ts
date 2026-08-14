import { Component } from '@angular/core';
import { PDetailsNav } from './p-details-nav/p-details-nav';
import { PDetailsTitle } from './p-details-title/p-details-title';
import { PDetailsSnapshot } from './p-details-snapshot/p-details-snapshot';
import { PDetailsDescription } from './p-details-description/p-details-description';
import { PDetailsContent } from './p-details-content/p-details-content';
import { PDetailsMore } from './p-details-more/p-details-more';

@Component({
  selector: 'app-project-details',
  imports: [
    PDetailsNav,
    PDetailsTitle,
    PDetailsSnapshot,
    PDetailsDescription,
    PDetailsContent,
    PDetailsMore,
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {}
