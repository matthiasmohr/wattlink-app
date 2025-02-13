import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnfrageparameterComponent } from './anfrageparameter/anfrageparameter.component';
import { AngeboteComponent } from './angebote/angebote.component';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { MesslokationenComponent } from './messlokationen/messlokationen.component';
import { AnfrageAnzeigenComponent } from './anfrage-anzeigen.component';
import { NachrichtenComponent } from './nachrichten/nachrichten.component';
import { NachrichtErstellenComponent } from './nachricht-erstellen/nachricht-erstellen.component';


const routes: Routes = [
  {
    path: '',
    component: AnfrageAnzeigenComponent,
    children: [
      {
        path: 'anfrageparameter',
        component: AnfrageparameterComponent,
      },
      {
        path: 'messlokationen',
        component: MesslokationenComponent,
      },
      {
        path: 'angebote',
        component: AngeboteComponent,
      },
      {
        path: 'dokumente',
        component: DokumenteComponent,
      },
      {
        path: 'nachrichten',
        component: NachrichtenComponent,
      },
      {
        path: 'nachricht-erstellen',
        component: NachrichtErstellenComponent,
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
export class AnfrageAnzeigenRoutingModule {}
