import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactService } from '../../../api/openapi';
import { ServerErrorsService } from '../../../services/errors/server-errors-service';
import Notiflix from 'notiflix';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  readonly contactEmail = 'hello@benie.dev';
  readonly contactLocation = 'Nakuru, Kenya';
  readonly contactTimezone = 'EAT / UTC+3';
  readonly contactResponseTime = 'Usually within 24 hours.';

  readonly contactGitHubUrl = 'https://github.com/feralsyntax';
  readonly contactLinkedInUrl = 'https://ke.linkedin.com/in/benson-langat-software-developer';
  readonly contactPhoneNumber = '+254708696335';

  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly serverErrorsService = inject(ServerErrorsService);

  protected readonly serverError = this.serverErrorsService.errorMessage;

  readonly contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  onSubmit(): void {
    this.serverErrorsService.clear();

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formValue = this.contactForm.getRawValue();

    Notiflix.Loading.dots('Sending message...');

    this.contactService
      .addContact(formValue)
      .pipe(finalize(() => Notiflix.Loading.remove()))
      .subscribe({
        next: () => {
          Notiflix.Notify.success('Message sent!');
          this.contactForm.reset();
        },
        error: (error) => {
          Notiflix.Notify.failure('Error sending message.');
          this.serverErrorsService.handleServerError(this.contactForm, error);
        },
      });
  }
}
