import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-exploring',
  imports: [],
  templateUrl: './landing-exploring.html',
  styleUrl: './landing-exploring.scss',
})
export class LandingExploring {
  readonly exploringCurrently = 'AI Agents';
  readonly exploringNext = 'Distributed Systems, IoT / Edge Computing';
}
