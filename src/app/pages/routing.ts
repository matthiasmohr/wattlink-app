import { Routes } from '@angular/router';
import {AnfragenListeComponent} from "./anfragen-liste/anfragen-liste.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MesslokationenListeComponent} from "./messlokationen-liste/messlokationen-liste.component";
import {MesslokationAnlegenComponent} from "./messlokation-anlegen/messlokation-anlegen.component";
import {AccountComponent} from "./partnerprofil-anzeigen/account.component";

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
    path: 'account',
    loadChildren: () =>
        import('./partnerprofil-anzeigen/account.module').then((m) => m.AccountModule),
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
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
