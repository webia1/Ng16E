import {
  Component,
  EventEmitter,
  Injector,
  OnInit,
  Output,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CustomFormlyModule } from '@app-shared-libs/formly';
import { CustomMaterialModule } from '@app-shared-libs/material';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'resuables-login',
  standalone: true,
  imports: [CommonModule, CustomMaterialModule, CustomFormlyModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() submitEvent = new EventEmitter<unknown>();

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
    console.log('Original Angular Element: ', model);
    this.submitEvent.emit(model);
  }
}
