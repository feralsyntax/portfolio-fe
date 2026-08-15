import { Component } from '@angular/core';

@Component({
  selector: 'app-about-hero',
  imports: [],
  templateUrl: './about-hero.html',
  styleUrl: './about-hero.scss',
})
export class AboutHero {
  readonly aboutIntro = 'I build software that meets people where they are';
  readonly aboutDescription = `I'm a Full-Stack Web Developer, driven by a desire to build applications that make a
      difference. My work lives at the intersection of human need and technical implementation.`;

  readonly aboutLocation = 'Nakuru, Kenya';
}
