import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly footerGitHubUrl = 'https://github.com/feralsyntax';
  readonly footerLinkedInUrl = 'https://ke.linkedin.com/in/benson-langat-software-developer';

  readonly currentYear = new Date().getFullYear();
}
