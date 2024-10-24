import {Component, Input, OnInit} from '@angular/core';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-lieferstellen-card',
  templateUrl: './card.component.html',
})
export class LieferstellenCardComponent implements OnInit {
  @Input() id: string = '';
  @Input() icon: string = '';
  @Input() melo: string = '';
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

  options: EChartsOption;

  constructor() {}

  ngOnInit() {

    const xAxisData = [];
    const data1 = [];

    for (let i = 0; i < 365; i++) {
      xAxisData.push('Tag ' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: idx => idx * 10,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: idx => idx * 5,
    };
  }
}
