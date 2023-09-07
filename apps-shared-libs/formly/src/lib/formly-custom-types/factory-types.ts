import { TranslateService } from '@ngx-translate/core';

export function formlyCustomTypes(ts: TranslateService) {
  return {
    types: [
      {
        name: 'app-email',
        extends: 'input',
        defaultOptions: {
          props: {
            type: 'email',
            required: true,
          },
          hooks: {
            onInit: (field) => {
              field.props.label = ts.instant('FORM_EMAIL_LABEL');
              field.props.placeholder = ts.instant('FORM_EMAIL_PLACEHOLDER');
            },
          },
        },
      },
    ],
  };
}
