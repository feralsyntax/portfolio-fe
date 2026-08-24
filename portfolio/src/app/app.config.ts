import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { provideDefaultClient } from './api/openapi';

const basePath = environment.baseUrl;

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      }),
    ),
    provideClientHydration(),
    provideHttpClient(),
    provideDefaultClient({
      basePath: basePath,
    }),
  ],
};
