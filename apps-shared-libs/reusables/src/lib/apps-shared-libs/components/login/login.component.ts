import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'ng16-e-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = new FormGroup({});
  model = { username: '', password: '' };
  fields: Array<FormlyFieldConfig> = [
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'Username',
        placeholder: 'Enter username',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Enter password',
        required: true,
      },
    },
  ];

  submit(model: unknown) {
    console.log('Model: ', model);
  }
}
