import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DemosModule } from './routed/demos/demos.module';
import { FormlyModule } from './shared/modules/formly/formly.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    DemosModule,
    FormlyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
