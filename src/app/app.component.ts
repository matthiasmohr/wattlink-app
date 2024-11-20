import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslationService } from './core/i18n';
import { locale as enLang } from './core/i18n/vocabs/en';
import { locale as chLang } from './core/i18n/vocabs/ch';
import { locale as esLang } from './core/i18n/vocabs/es';
import { locale as jpLang } from './core/i18n/vocabs/jp';
import { locale as deLang } from './core/i18n/vocabs/de';
import { locale as frLang } from './core/i18n/vocabs/fr';
import { ThemeModeService } from './_metronic/partials/layout/theme-mode-switcher/theme-mode.service';
import {AuthService} from "@auth0/auth0-angular";
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  // tslint:disable-next-line:component-selector
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'body[root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  //providers: [provideEcharts()],
})
export class AppComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private modeService: ThemeModeService,
    private auth: AuthService,
  ) {
    // register translations
    this.translationService.loadTranslations(
      enLang,
      chLang,
      esLang,
      jpLang,
      deLang,
      frLang
    );
  }

  ngOnInit() {
    this.modeService.init();
  }
}
