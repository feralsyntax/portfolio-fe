import { Component } from '@angular/core';
import { LandingHero } from './landing-hero/landing-hero';
import { LandingFeatured } from './landing-featured/landing-featured';

@Component({
  selector: 'app-landing-page',
  imports: [LandingHero, LandingFeatured],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
