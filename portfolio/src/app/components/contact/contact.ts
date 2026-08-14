import { Component } from '@angular/core';
import { ContactIntro } from './contact-intro/contact-intro';
import { ContactForm } from './contact-form/contact-form';
import { ContactSkills } from './contact-skills/contact-skills';

@Component({
  selector: 'app-contact',
  imports: [ContactIntro, ContactForm, ContactSkills],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
