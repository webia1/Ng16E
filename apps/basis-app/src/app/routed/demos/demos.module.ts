import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomFormlyModule } from '@apps-shared-libs/formly';
import { CustomMaterialModule } from '@apps-shared-libs/material';

import { FormlyExampleComponent } from './components/formly-example/formly-example.component';
import { LoginExampleComponent } from './components/login-example/login-example.component';
import { MaterialExampleComponent } from './components/material-example/material-example.component';
import { DemosRoutingModule } from './demos-routing.module';

@NgModule({
  declarations: [
    MaterialExampleComponent,
    FormlyExampleComponent,
    LoginExampleComponent,
  ],
  imports: [
    CommonModule,
    DemosRoutingModule,
    CustomMaterialModule,
    CustomFormlyModule,
  ],
})
export class DemosModule {}
