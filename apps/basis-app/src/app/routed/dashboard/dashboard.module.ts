import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFormlyModule } from '@app-shared-libs/formly';
import { CustomMaterialModule } from '@app-shared-libs/material';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    CustomFormlyModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
