import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerticalComponent } from './vertical/vertical.component';
import { WizardsComponent } from './wizards.component';

const routes: Routes = [
  {
    path: '',
    component: WizardsComponent,
    children: [
      {
        path: 'vertical',
        component: VerticalComponent,
      },
      { path: '', redirectTo: 'vertical', pathMatch: 'full' },
      { path: '**', redirectTo: 'vertical', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardsRoutingModule {}
