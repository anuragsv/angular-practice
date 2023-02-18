import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApHomeComponent } from './ap-ui/ap-home/ap-home.component';

const routes: Routes = [
  { path: 'home', component: ApHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
