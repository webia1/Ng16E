import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-login-example',
  templateUrl: './login-example.component.html',
  styleUrls: ['./login-example.component.scss'],
})
export class LoginExampleComponent {
  form = new FormGroup({});
  model = { username: '', password: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'username',
      type: 'app-login-username',
    },
    {
      key: 'password',
      type: 'app-login-password',
    },
  ];
  onSubmit(model: unknown) {
    console.log(model);
  }
}
