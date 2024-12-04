import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnfrageparameterAgentComponent } from './anfrageparameter/anfrageparameter.component';
import { AngeboteAgentComponent } from './angebote/angebote.component';
import { DokumenteAgentComponent } from './dokumente/dokumente.component';
import { MesslokationenAgentComponent } from './messlokationen/messlokationen.component';
import { AnfrageAnzeigenAgentComponent } from './anfrage-anzeigen.component';
import { NachrichtenAgentComponent } from './nachrichten/nachrichten.component';

const routes: Routes = [
  {
    path: '',
    component: AnfrageAnzeigenAgentComponent,
    children: [
      {
        path: 'anfrageparameter',
        component: AnfrageparameterAgentComponent,
      },
      {
        path: 'messlokationen',
        component: MesslokationenAgentComponent,
      },
      {
        path: 'angebote',
        component: AngeboteAgentComponent,
      },
      {
        path: 'dokumente',
        component: DokumenteAgentComponent,
      },
      {
        path: 'nachrichten',
        component: NachrichtenAgentComponent,
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
export class AnfrageAnzeigenAgentRoutingModule {}
