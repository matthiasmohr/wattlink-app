import {NgModule, APP_INITIALIZER, importProvidersFrom} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptorsFromDi, withNoXsrfProtection} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
// #fake-end#
import {AuthModule} from '@auth0/auth0-angular'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    ClipboardModule,

    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    // # Auth0 Auth module
    AuthModule.forRoot({
      domain: environment.auth.CLIENT_DOMAIN,
      clientId: environment.auth.CLIENT_ID,
      authorizationParams: {
          redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [
      provideHttpClient(),
      importProvidersFrom([
          // #fake-start#
          environment.isMockEnabled
              ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
                  passThruUnknownUrl: true,
                  dataEncapsulation: false,
              })
              : [],
          // #fake-end#
      ])
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
