import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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

  private readonly fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const formValue = this.contactForm.getRawValue();

    const payload = {
      name: formValue.name!,
      email: formValue.email!,
      message: formValue.message!,
    };
  }
}
