import { Component } from '@angular/core';
import { AboutHero } from './about-hero/about-hero';
import { AboutTimeline } from './about-timeline/about-timeline';
import { AboutExploring } from './about-exploring/about-exploring';

@Component({
  selector: 'app-about',
  imports: [AboutHero, AboutTimeline, AboutExploring],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
