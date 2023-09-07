import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FORMLY_CONFIG, FormlyModule } from '@ngx-formly/core';
import { FormlyMatInputModule } from '@ngx-formly/material/input';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { translateValidationMessages } from './validation/messages';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'global-assets/i18n/', '.json');
}

@NgModule({
  imports: [
    FormlyModule.forRoot(),
    FormlyMatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],

  providers: [
    {
      provide: FORMLY_CONFIG,
      multi: true,
      useFactory: translateValidationMessages,
      deps: [TranslateService],
    },
  ],

  exports: [
    FormlyModule,
    FormlyMatInputModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class CustomFormlyModule {}
