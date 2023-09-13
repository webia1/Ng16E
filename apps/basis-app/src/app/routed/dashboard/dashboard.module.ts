import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomFormlyModule } from '@apps-shared-libs/formly';
import { CustomMaterialModule } from '@apps-shared-libs/material';

import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { HeaderLangSettingComponent } from './components/dashboard-header/components/header-lang-setting/header-lang-setting.component';
import { HeaderMenuSettingsComponent } from './components/dashboard-header/components/header-menu-settings/header-menu-settings.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardLeftSideNavComponent } from './components/dashboard-left-side-nav/dashboard-left-side-nav.component';
import { DashboardRightSideNavComponent } from './components/dashboard-right-side-nav/dashboard-right-side-nav.component';
import { DashboardSidenavContentComponent } from './components/dashboard-side-nav-content/dashboard-sidenav-content.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    HeaderLangSettingComponent,
    HeaderMenuSettingsComponent,
    DashboardLeftSideNavComponent,
    DashboardSidenavContentComponent,
    DashboardRightSideNavComponent,
    DashboardFooterComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    CustomFormlyModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
