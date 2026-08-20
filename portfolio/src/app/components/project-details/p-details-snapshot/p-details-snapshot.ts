import { Component, input } from '@angular/core';

@Component({
  selector: 'app-p-details-snapshot',
  imports: [],
  templateUrl: './p-details-snapshot.html',
  styleUrl: './p-details-snapshot.scss',
})
export class PDetailsSnapshot {
  readonly snapshot = input<string | null | undefined>(null);
  readonly projectName = input<string>();
}
