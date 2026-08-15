import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  readonly contactEmail = 'bensonlangat.bl@gmail.com';
  readonly contactLocation = 'Nakuru, Kenya';
  readonly contactTimezone = 'EAT / UTC+3';
  readonly contactResponseTime = 'Usually within 24 hours.';

  readonly contactGitHubUrl = 'https://github.com/feralsyntax';
  readonly contactLinkedInUrl = 'https://ke.linkedin.com/in/benson-langat-software-developer';
  readonly contactPhoneNumber = '+254708696335';
}
