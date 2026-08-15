import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-landing-hero',
  imports: [RouterLink],
  templateUrl: './landing-hero.html',
  styleUrl: './landing-hero.scss',
})
export class LandingHero {
  readonly titleLead = 'Building for';
  readonly titleSpan = 'the Modern Web';
  readonly tagline = `By Benie Langat — I develop interactive, human-centered web applications with Angular, React, and Python/Django. Exploring AI integration and distributed systems.`;

  readonly heroImgUrl = `https://lh3.googleusercontent.com/aida-public/AB6AXuC90FbgmGospRM2fVXdNncTtB9nm8GpJvJx0D0ch8hQh2pKgljxdG411IFDQLbfVVgf1nkcp0ae8nu5jH71j7La1jqg0Pl2yJSpmVxGvXl7CZWQvfZ2rpuVdA6ZMkoFve8d7qKuFJVO8fZvPx1aEYTeqtoPblgBiOvF-xPvi-Qko_uxC4W77n1xyZV9KZtfU1MDc1WxlVt8Ue0t1HSXK3ALdMPkCwccOCo6XeAZt489CXDEWT2CfCck`;
  readonly heroImgAlt = `A highly detailed 3D rendering of an abstract orb with swirling, organic folds of purple and copper tones, illuminated by a warm, ethereal glow against a deep, dark void background, representing futuristic technology and natural forms merging.`;

  readonly heroTag1 = 'AI';
  readonly hearoTag2 = 'Web';
  readonly heroTag3 = 'Systems';
}
