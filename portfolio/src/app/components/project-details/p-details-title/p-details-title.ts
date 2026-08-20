import { Component, input } from '@angular/core';

@Component({
  selector: 'app-p-details-title',
  imports: [],
  templateUrl: './p-details-title.html',
  styleUrl: './p-details-title.scss',
})
export class PDetailsTitle {
  readonly projectName = input<string>();
  readonly projectShortDescription = input<string>();
}
