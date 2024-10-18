import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnfrageparameterComponent } from './anfrageparameter/anfrageparameter.component';
import { AngeboteComponent } from './angebote/angebote.component';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { LieferstellenComponent } from './lieferstellen/lieferstellen.component';
import { AnfrageAnzeigenComponent } from './anfrage-anzeigen.component';
import { ProzessComponent } from './prozess/prozess.component';

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
        path: 'lieferstellen',
        component: LieferstellenComponent,
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
        path: 'prozess',
        component: ProzessComponent,
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
