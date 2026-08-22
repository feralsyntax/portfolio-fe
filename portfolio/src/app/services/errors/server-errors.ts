import { Service, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';

const DEFAULT_SERVER_ERROR = 'Something went wrong. Please try again.';
const SERVER_ERROR_KEY = 'server';

@Service()
export class ServerErrors {
  readonly serverError = signal<string | null>(null);

  clear(): void {
    this.serverError.set(null);
  }

  private setGenericError(): void {
    this.serverError.set(DEFAULT_SERVER_ERROR);
  }

  private isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
  }

  private getMessages(value: unknown): string[] {
    if (typeof value === 'string') {
      return [value];
    }

    if (!Array.isArray(value)) {
      return [];
    }

    return value.filter((message): message is string => typeof message === 'string');
  }

  handleServerError(form: FormGroup, error: unknown): void {
    this.clear();

    if (!this.isObject(error)) {
      this.setGenericError();
      return;
    }

    const body = error['error'];

    if (!this.isObject(body)) {
      this.setGenericError();
      return;
    }

    // General DRF exception:
    // { "detail": "Something went wrong." }
    if (typeof body['detail'] === 'string') {
      this.serverError.set(body['detail']);
      return;
    }

    // DRF non-field validation error:
    // {
    //   "non_field_errors": ["Something went wrong."]
    // }
    const nonFieldErrors = this.getMessages(body['non_field_errors']);

    if (nonFieldErrors.length > 0) {
      this.serverError.set(nonFieldErrors.join(', '));
    }

    // DRF field validation errors:
    // {
    //   "name": ["This field is required."],
    //   "email": ["Enter a valid email address."]
    // }
    let hasFieldErrors = false;

    for (const [field, value] of Object.entries(body)) {
      if (field === 'non_field_errors') {
        continue;
      }

      const control = form.get(field);

      if (!control) {
        continue;
      }

      const messages = this.getMessages(value);

      if (messages.length === 0) {
        continue;
      }

      hasFieldErrors = true;

      control.setErrors({
        ...control.errors,
        [SERVER_ERROR_KEY]: messages.join(', '),
      });
    }

    if (!this.serverError() && !hasFieldErrors) {
      this.setGenericError();
    }
  }
}
