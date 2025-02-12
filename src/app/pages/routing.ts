import { Routes } from '@angular/router';
import {AnfragenListeComponent} from "./anfragen-liste/anfragen-liste.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MesslokationenListeComponent} from "./messlokationen-liste/messlokationen-liste.component";
import {MesslokationAnlegenComponent} from "./messlokation-anlegen/messlokation-anlegen.component";
import {AccountComponent} from "./account/account.component";
import {MesslokationLastkurveComponent} from "./messlokation-lastkurve/messlokation-lastkurve.component";
import {PartnerprofileListeAgentComponent} from "./agent/partnerprofile-liste-agent/partnerprofile-liste-agent.component";
import {AnfrageAnzeigenAgentComponent} from "./agent/anfrage-anzeigen/anfrage-anzeigen.component";
import {AnfrageAnzeigenAgentModule} from "./agent/anfrage-anzeigen/anfrage-anzeigen.module";
import {ImpressumComponent} from "./static/impressum/impressum.component";

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
        import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'anfragen-liste',
    component: AnfragenListeComponent
  },
  {
    path: 'anfrage-anzeigen/:id',
    loadChildren: () =>
        import('./anfrage-anzeigen/anfrage-anzeigen.module').then((m) => m.AnfrageAnzeigenModule),
  },
  {
    path: 'anfrage-anlegen',
    loadChildren: () =>
        import('../pages/anfrage-anlegen/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'messlokationen-liste',
    component: MesslokationenListeComponent
  },
  {
    path: 'messlokation-anlegen/:id',
    component: MesslokationAnlegenComponent
  },
  {
    path: 'messlokation-anlegen',
    component: MesslokationAnlegenComponent
  },
  {
    path: 'messlokation-lastkurve/:id',
    component: MesslokationLastkurveComponent
  },

  // AGENT: TODO: IN MODUL AUSLAGERN
  {
    path: 'agent/partnerprofile-liste',
    component: PartnerprofileListeAgentComponent
  },
  {
    path: 'agent/partnerprofil/:partnerprofilid/anfrage-anzeigen/:anfrageid',
    loadChildren: () =>
        import('./agent/anfrage-anzeigen/anfrage-anzeigen.module').then((m) => m.AnfrageAnzeigenAgentModule),
  },
  // AGENT END

  {
    path: 'account',
    loadChildren: () =>
        import('./account/account.module').then((m) => m.AccountModule),
  },

  // STATIC PAGES
  {
    path: 'impressum',
    component: ImpressumComponent
  },

  {
    path: 'crafted/pages/profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: '',
    redirectTo: '/anfragen-liste',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
