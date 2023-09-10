import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialExampleComponent } from './components/material-example/material-example.component';
import { FormlyExampleComponent } from './components/formly-example/formly-example.component';
import { LoginExampleComponent } from './components/login-example/login-example.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'material',
    component: MaterialExampleComponent,
  },
  {
    path: 'formly',
    component: FormlyExampleComponent,
  },
  {
    path: 'login',
    component: LoginExampleComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
