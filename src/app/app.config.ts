import {
  LOCALE_ID,
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import {MatNativeDateModule} from '@angular/material/core';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localeFr);
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'fr' },
    importProvidersFrom([MatNativeDateModule]),
    provideHttpClient()
  ],
};
