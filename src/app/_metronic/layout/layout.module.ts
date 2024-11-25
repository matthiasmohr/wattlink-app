import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { RouterModule, Routes } from '@angular/router';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationModule } from '../../core/i18n';
import { LayoutComponent } from './layout.component';
import { ExtrasModule } from '../partials/layout/extras/extras.module';
import { Routing } from '../../pages/routing';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScriptsInitComponent } from './components/scripts-init/scripts-init.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AsideMenuComponent } from './components/aside/aside-menu/aside-menu.component';
import { TabsAsideComponent } from './components/aside/tabs-aside/tabs-aside.component';
import { TabsAsideInnerComponent } from './components/aside/tabs-aside/tabs-aside-inner.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { PageTitleComponent } from './components/header/page-title/page-title.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import {
  DrawersModule,
  DropdownMenusModule,
  ModalsModule,
  EngagesModule,
} from '../partials';
import { EngagesComponent } from '../partials/layout/engages/engages.component';
import { EndkundenTabComponent } from './components/aside/tabs/endkunden-tab/endkunden-tab.component';
import { AgentTabComponent } from './components/aside/tabs/agent-tab/agent-tab.component';
import { VersorgerTabComponent } from './components/aside/tabs/versorger-tab/versorger-tab.component';
import { FormsModule } from '@angular/forms';
import { ThemeModeModule } from '../partials/layout/theme-mode-switcher/theme-mode.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ScriptsInitComponent,
    ToolbarComponent,
    AsideMenuComponent,
    TopbarComponent,
    PageTitleComponent,
    HeaderMenuComponent,
    EngagesComponent,
    TabsAsideComponent,
    TabsAsideInnerComponent,
    EndkundenTabComponent,
    AgentTabComponent,
    VersorgerTabComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslationModule,
        InlineSVGModule,
        NgbDropdownModule,
        NgbProgressbarModule,
        ExtrasModule,
        ModalsModule,
        DrawersModule,
        EngagesModule,
        DropdownMenusModule,
        NgbTooltipModule,
        TranslateModule,
        FormsModule,
        ThemeModeModule,
        SharedModule,
        NgOptimizedImage,
    ],
  exports: [RouterModule],
})
export class LayoutModule {}
