import { TranslateService } from '@ngx-translate/core';

export function formlyCustomTypes(ts: TranslateService) {
  return {
    types: [
      {
        name: 'app-email',
        extends: 'input',
        defaultOptions: {
          templateOptions: {
            type: 'email',
            label: ts.stream('FORM_EMAIL_LABEL'),
            placeholder: ts.stream('FORM_EMAIL_PLACEHOLDER'),
            required: true,
          },
        },
      },
    ],
  };
}
