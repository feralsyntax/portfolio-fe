import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContactService } from '../../../api/openapi';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
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

  serverError = signal<string | null>(null);
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  private readonly destroyRef = inject(DestroyRef);

  contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  onSubmit(): void {
    this.serverError.set(null);

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formValue = this.contactForm.getRawValue();

    this.contactService.addContact(formValue).subscribe({ next: () => {}, error: (error) => {} });
  }
}
