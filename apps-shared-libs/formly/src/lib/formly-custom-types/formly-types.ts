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
          expressionProperties: {
            'props.label': () => ts.instant('FORM_EMAIL_LABEL'),
            'props.placeholder': () => ts.instant('FORM_EMAIL_PLACEHOLDER'),
          },
        },
      },
      {
        name: 'app-login-username',
        extends: 'input',
        defaultOptions: {
          props: {
            type: 'text',
            required: true,
          },
          expressionProperties: {
            'props.label': () => ts.instant('FORM_LOGIN_USERNAME_LABEL'),
            'props.placeholder': () =>
              ts.instant('FORM_LOGIN_USERNAME_PLACEHOLDER'),
          },
        },
      },
      {
        name: 'app-login-password',
        extends: 'input',
        defaultOptions: {
          props: {
            type: 'password',
            required: true,
          },
          expressionProperties: {
            'props.label': () => ts.instant('FORM_LOGIN_PASSWORD_LABEL'),
            'props.placeholder': () =>
              ts.instant('FORM_LOGIN_PASSWORD_PLACEHOLDER'),
          },
        },
      },
    ],
  };
}
