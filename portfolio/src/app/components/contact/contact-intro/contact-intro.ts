import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-intro',
  imports: [],
  templateUrl: './contact-intro.html',
  styleUrl: './contact-intro.scss',
})
export class ContactIntro {
  readonly contactIntroTitle = `Let's build something impactful together.`;
  readonly contactIntroDescription = `Have a project, an idea, or a role that fits my work? I'd love to hear from you.`;
  readonly contactIntroCurrentStatus = 'Currently open to select freelance roles.';
}
