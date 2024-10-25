import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {BehaviorSubject, delay, Observable, of, Subscription, tap} from "rxjs";
import {InlineSVGModule} from "ng-inline-svg-2";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {LastkurvenApiService} from "../../shared/lastkurven.service";
import {Messlokation, messlokationInit} from "../../shared/Messlokation";
import { Location } from '@angular/common'
import {FormsModule} from "@angular/forms";
import {NgxEchartsDirective} from "ngx-echarts";
import type {EChartsOption} from "echarts";
import {LastkurvenTable} from "../../_fake/lastkurven.table";


@Component({
  selector: 'app-messlokation-lastkurve',
  standalone: true,
  imports: [
    NgForOf,
    InlineSVGModule,
    NgIf,
    RouterLink,
    AsyncPipe,
    FormsModule,
    NgxEchartsDirective
  ],
  templateUrl: './messlokation-lastkurve.component.html',
  styleUrl: './messlokation-lastkurve.component.scss',
})
export class MesslokationLastkurveComponent implements OnInit {
  constructor(
      public lastkurvenApiService: LastkurvenApiService,
      private cdr: ChangeDetectorRef,
      private location: Location,
      private route: ActivatedRoute,
  ) {}

  id: any = ""
  messlokation: Messlokation = {} as Messlokation;

  isLoading: boolean;

  options: EChartsOption;
  mergeOptions: EChartsOption;

  data: any

  private unsubscribe: Subscription[] = [];

  ngOnInit() {
    this.initializeChart()
    this.isLoading = true;
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      if (params.get('id') != null) {
        this.lastkurvenApiService.getLastkurve(1).subscribe(res => { // TODO: Die richtige Lastkurve abfragen...
          this.data = res['data']
          this.isLoading = false;
          this.updateChart()
          this.cdr.detectChanges();
        })
      }
    })
  }

  initializeChart(){
    this.options = {
      title: {
        text: 'Lastkurve',
        left: '1%'
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '5%',
        right: '15%',
        bottom: '10%'
      },
      yAxis: {},
      toolbox: {
        right: 10,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: [
        {
          startValue: '2014-06-01'
        },
        {
          type: 'inside'
        }
      ],
    };
  }

  updateChart() {
    this.mergeOptions = {
      animationEasing: 'elasticOut',
      xAxis: {
        data: this.data.map(function (item: any) {
          return item[0];
        })
      },
      series: {
        name: 'Lastkurve',
        type: 'line',
        data: this.data.map(function (item: any) {
          return item[1];
        }),
        markLine: {
          silent: true,
          lineStyle: {
            color: '#333'
          },
          data: [
            {
              yAxis: 50
            },
            {
              yAxis: 100
            },
            {
              yAxis: 150
            },
            {
              yAxis: 200
            },
            {
              yAxis: 300
            }
          ]
        },
      },
      visualMap: {
        top: 50,
        right: 10,
        pieces: [
          {
            gt: 0,
            lte: 50,
            color: '#93CE07'
          },
          {
            gt: 50,
            lte: 100,
            color: '#FBDB0F'
          },
          {
            gt: 100,
            lte: 150,
            color: '#FC7D02'
          },
          {
            gt: 150,
            lte: 200,
            color: '#FD0100'
          },
          {
            gt: 200,
            lte: 300,
            color: '#AA069F'
          },
          {
            gt: 300,
            color: '#AC3B2A'
          }
        ],
        outOfRange: {
          color: '#999'
        }
      },
    }
  }

  back() {
    this.location.back()
  }
}
