import { Component } from '@angular/core';
import { LandingHero } from './landing-hero/landing-hero';

@Component({
  selector: 'app-landing-page',
  imports: [LandingHero],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}
