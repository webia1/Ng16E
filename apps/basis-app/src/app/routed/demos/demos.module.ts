import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { MaterialExampleComponent } from './components/material-example/material-example.component';
import { FormlyExampleComponent } from './components/formly-example/formly-example.component';
import { CustomMaterialModule } from '@app-shared-libs/material';

@NgModule({
  declarations: [MaterialExampleComponent, FormlyExampleComponent],
  imports: [CommonModule, DemosRoutingModule, CustomMaterialModule],
})
export class DemosModule {}
