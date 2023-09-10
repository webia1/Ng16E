import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}
  onSubmit(model: unknown) {
    console.log('Model: ', model);
    if (this.form.valid) {
      this.router.navigate(['/dashboard']);
    }
  }
}
