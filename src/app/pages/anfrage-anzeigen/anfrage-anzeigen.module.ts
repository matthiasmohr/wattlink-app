import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { AnfrageparameterComponent } from './anfrageparameter/anfrageparameter.component';
import { MesslokationenComponent } from './messlokationen/messlokationen.component';
import { AngeboteComponent } from './angebote/angebote.component';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { AnfrageAnzeigenRoutingModule } from './anfrage-anzeigen-routing.module';
import { AnfrageAnzeigenComponent } from './anfrage-anzeigen.component';
import { NachrichtenComponent } from './nachrichten/nachrichten.component';
import { NachrichtErstellenComponent } from './nachricht-erstellen/nachricht-erstellen.component';

import {
  CardsModule,
  DropdownMenusModule,
  WidgetsModule,
} from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";
import {LieferstellenCardComponent} from "./messlokationen/messlokationen-card/card.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {NgxEchartsDirective} from "ngx-echarts";

@NgModule({
  declarations: [
    AnfrageAnzeigenComponent,
    AnfrageparameterComponent,
    MesslokationenComponent,
    LieferstellenCardComponent,
    AngeboteComponent,
    DokumenteComponent,
    NachrichtenComponent,
    NachrichtErstellenComponent
  ],
  imports: [
    CommonModule,
    AnfrageAnzeigenRoutingModule,
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    CardsModule,
    SharedModule,
    ReactiveFormsModule,
    NgbTooltip,
    NgxEchartsDirective,
    FormsModule
  ],
})
export class AnfrageAnzeigenModule {}
