import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { AnfrageparameterComponent } from './anfrageparameter/anfrageparameter.component';
import { LieferstellenComponent } from './lieferstellen/lieferstellen.component';
import { AngeboteComponent } from './angebote/angebote.component';
import { DokumenteComponent } from './dokumente/dokumente.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProzessComponent } from './prozess/prozess.component';
import {
  CardsModule,
  DropdownMenusModule,
  WidgetsModule,
} from '../../_metronic/partials';
import { SharedModule } from "../../_metronic/shared/shared.module";
import {LieferstellenCardComponent} from "./lieferstellen/lieferstellen-card/card.component";

@NgModule({
  declarations: [
    ProfileComponent,
    AnfrageparameterComponent,
    LieferstellenComponent,
    LieferstellenCardComponent,
    AngeboteComponent,
    DokumenteComponent,
    ProzessComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    CardsModule,
    SharedModule
  ],
})
export class ProfileModule {}
