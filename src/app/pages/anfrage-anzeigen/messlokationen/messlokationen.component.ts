import { Component, OnInit } from '@angular/core';
import { IconUserModel } from '../../../_metronic/partials';
import {Observable} from "rxjs";
import {Messlokation} from "../../../shared/Messlokation";
import {MesslokationenApiService} from "../../../shared/messlokation.service";
import {ActivatedRoute} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-projects',
  templateUrl: './messlokationen.component.html',
})
export class MesslokationenComponent implements OnInit {

  constructor(
      public messlokationenApiService: MesslokationenApiService,
      private route: ActivatedRoute,
      private modalService: NgbModal
  ) {}

  messlokationen$: Observable<Messlokation[]>

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getMesslokation(params.get('id'));
    })
  }

  getMesslokation(anfrageId: any) {
    this.messlokationen$ = this.messlokationenApiService.getMesslokationen(anfrageId)
  }
}
