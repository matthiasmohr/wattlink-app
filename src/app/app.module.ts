import {NgModule, APP_INITIALIZER, importProvidersFrom} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { FakeAPIService } from './_fake/fake-api.service';
import {authHttpInterceptorFn, AuthModule, provideAuth0} from '@auth0/auth0-angular'
import { NgxEchartsModule } from 'ngx-echarts';


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
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [
      provideHttpClient(withInterceptors([authHttpInterceptorFn])),
      // # Auth0 Auth module
      provideAuth0({
          domain: environment.auth.AUTH0_DOMAIN,
          clientId: environment.auth.AUTH0_CLIENT_ID,
          authorizationParams: {
              redirect_uri: window.location.origin,
              //audience: environment.auth.AUTH0_AUDIENCE,
              audience: environment.auth.AUTH0_AUDIENCE,
          },
          httpInterceptor: {
              allowedList: [
                  'http://127.0.0.1:8080/*',
                  'https://127.0.0.1:8080/*',
                  'https://stage.backend.wattlink.hasemato.com/*',
                  'https://backend.wattlink.hasemato.com/*',
              ]}
      }),
      importProvidersFrom([
          // #fake-start#
          environment.isMockEnabled
              ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
                  passThruUnknownUrl: true,
                  dataEncapsulation: false,
              })
              : [],
          // #fake-end#
      ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
