import { Component } from '@angular/core';

interface Skill {
  title: string;
}

@Component({
  selector: 'app-contact-skills',
  imports: [],
  templateUrl: './contact-skills.html',
  styleUrl: './contact-skills.scss',
})
export class ContactSkills {
  readonly skills: Skill[] = [
    { title: 'Full-stack web development' },
    { title: 'AI integration' },
    { title: 'API development' },
    { title: 'Implementing designs' },
    { title: 'Content updates' },
    { title: 'Maintenance' },
  ];
}
