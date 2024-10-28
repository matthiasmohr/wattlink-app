import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';
import {PartnerprofilAnzeigenComponent} from './partnerprofil-anzeigen/partnerprofil.component';
import {PartnerprofilAnlegenComponent} from "./partnerprofil-anlegen/partnerprofil-anlegen.component";

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'partnerprofil-anzeigen',
        component: PartnerprofilAnzeigenComponent,
      },
      {
        path:'partnerprofil-anlegen',
        component: PartnerprofilAnlegenComponent
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
