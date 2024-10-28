import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { PartnerprofilAnzeigenComponent } from './partnerprofil-anzeigen/partnerprofil.component';
import { ProfileDetailsComponent } from './partnerprofil-anzeigen/forms/profile-details/profile-details.component';
import { ConnectedAccountsComponent } from './partnerprofil-anzeigen/forms/connected-accounts/connected-accounts.component';
import { DeactivateAccountComponent } from './partnerprofil-anzeigen/forms/deactivate-account/deactivate-account.component';
import { EmailPreferencesComponent } from './partnerprofil-anzeigen/forms/email-preferences/email-preferences.component';
import { NotificationsComponent } from './partnerprofil-anzeigen/forms/notifications/notifications.component';
import { SignInMethodComponent } from './partnerprofil-anzeigen/forms/sign-in-method/sign-in-method.component';
import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
import {SharedModule} from "../../_metronic/shared/shared.module";

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    PartnerprofilAnzeigenComponent,
    ProfileDetailsComponent,
    ConnectedAccountsComponent,
    DeactivateAccountComponent,
    EmailPreferencesComponent,
    NotificationsComponent,
    SignInMethodComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    DropdownMenusModule,
    WidgetsModule,
    SharedModule,
  ],
})
export class AccountModule {}
