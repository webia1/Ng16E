import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginExampleComponent } from './routed/demos/components/login-example/login-example.component';
const routes: Routes = [
  { path: '', component: LoginExampleComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
