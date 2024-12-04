import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { AnfrageparameterAgentComponent } from './anfrageparameter/anfrageparameter.component';
import { MesslokationenAgentComponent } from './messlokationen/messlokationen.component';
import { AngeboteAgentComponent } from './angebote/angebote.component';
import { DokumenteAgentComponent } from './dokumente/dokumente.component';
import { AnfrageAnzeigenAgentRoutingModule } from './anfrage-anzeigen-routing.module';
import { AnfrageAnzeigenAgentComponent } from './anfrage-anzeigen.component';
import { NachrichtenAgentComponent } from './nachrichten/nachrichten.component';
import {
  CardsModule,
  DropdownMenusModule,
  WidgetsModule,
} from '../../../_metronic/partials';
import { SharedModule } from "../../../_metronic/shared/shared.module";
import {LieferstellenCardAgentComponent} from "./messlokationen/messlokationen-card/card.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {NgxEchartsDirective} from "ngx-echarts";

@NgModule({
  declarations: [
    AnfrageAnzeigenAgentComponent,
    AnfrageparameterAgentComponent,
    MesslokationenAgentComponent,
    LieferstellenCardAgentComponent,
    AngeboteAgentComponent,
    DokumenteAgentComponent,
    NachrichtenAgentComponent,
  ],
    imports: [
        CommonModule,
        AnfrageAnzeigenAgentRoutingModule,
        InlineSVGModule,
        DropdownMenusModule,
        WidgetsModule,
        CardsModule,
        SharedModule,
        ReactiveFormsModule,
        NgbTooltip,
        NgxEchartsDirective
    ],
})
export class AnfrageAnzeigenAgentModule {}
