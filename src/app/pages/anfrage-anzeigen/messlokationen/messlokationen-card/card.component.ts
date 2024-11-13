import {Component, Input, OnInit} from '@angular/core';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-lieferstellen-card',
  templateUrl: './card.component.html',
})
export class LieferstellenCardComponent implements OnInit {
  @Input() id: string = '';
  @Input() icon: string = '';
  @Input() messlokationID: string = '';
  @Input() plz: string = '';
  @Input() stadt: string = '';
  @Input() strasse: string = '';
  @Input() hausnummer: string = '';
  @Input() jahresverbrauch_kWh: string = '';
  @Input() spitzenlast_kW: string = '';
  @Input() profil: string = '';
  @Input() fortschritt: number = 0;
  @Input() status: string = '';
  @Input() farbe: string = '';

  constructor() {}

  ngOnInit() {
  }
}
