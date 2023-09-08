import { CustomMaterialModule } from '@app-shared-libs/material';
import { CustomFormlyModule } from '@app-shared-libs/formly';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './apps-shared-libs/components/login/login.component';

@NgModule({
  imports: [CommonModule, CustomMaterialModule, CustomFormlyModule],
  declarations: [LoginComponent],
})
export class AppsSharedLibsReusablesModule {}
