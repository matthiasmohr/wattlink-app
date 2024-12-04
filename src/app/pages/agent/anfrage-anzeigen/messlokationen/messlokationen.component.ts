import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Messlokation} from "../../../../shared/Messlokation";
import {MesslokationenApiService} from "../../../../shared/messlokation.service";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-projects',
  templateUrl: '../../../anfrage-anzeigen/messlokationen/messlokationen.component.html',
})
export class MesslokationenAgentComponent implements OnInit {

  constructor(
      public messlokationenApiService: MesslokationenApiService,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef,
  ) {}

  messlokationen$: Observable<Messlokation[]>
  isLoading: boolean

  ngOnInit(): void {
    this.isLoading = true
    this.route.paramMap.subscribe(params => {
      this.getMesslokation(params.get('id'));
      this.isLoading = false
    })
  }

  getMesslokation(anfrageId: any) {
    this.messlokationen$ = this.messlokationenApiService.getMesslokationen(anfrageId)
  }
}
