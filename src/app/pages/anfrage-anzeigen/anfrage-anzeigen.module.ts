import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { AnfrageparameterComponent } from './anfrageparameter/anfrageparameter.component';
import { MesslokationenComponent } from './lieferstellen/messlokationen.component';
import { AngeboteComponent } from './angebote/angebote.component';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { AnfrageAnzeigenRoutingModule } from './anfrage-anzeigen-routing.module';
import { AnfrageAnzeigenComponent } from './anfrage-anzeigen.component';
import { ProzessComponent } from './prozess/prozess.component';
import {
  CardsModule,
  DropdownMenusModule,
  WidgetsModule,
} from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";
import {LieferstellenCardComponent} from "./lieferstellen/messlokationen-card/card.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AnfrageAnzeigenComponent,
    AnfrageparameterComponent,
    MesslokationenComponent,
    LieferstellenCardComponent,
    AngeboteComponent,
    DokumenteComponent,
    ProzessComponent,
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
        NgbTooltip
    ],
})
export class AnfrageAnzeigenModule {}
