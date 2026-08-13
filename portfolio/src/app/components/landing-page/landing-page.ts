import { Component } from '@angular/core';
import { LandingHero } from './landing-hero/landing-hero';
import { LandingFeatured } from './landing-featured/landing-featured';
import { LandingExploring } from './landing-exploring/landing-exploring';
import { Footer } from '../navigation/footer/footer';

@Component({
  selector: 'app-landing-page',
  imports: [LandingHero, LandingFeatured, LandingExploring, Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
