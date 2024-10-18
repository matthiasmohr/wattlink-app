import { Component, OnInit } from '@angular/core';
import {Anfrage, inits} from "../../shared/Anfrage";
import {AnfragenApiService} from "../../shared/anfrage.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './anfrage-anzeigen.component.html',
})
export class AnfrageAnzeigenComponent implements OnInit {
  constructor(
      public anfragenApiService: AnfragenApiService,
      private route: ActivatedRoute,
  ) {}

  anfrage$: Observable<Anfrage>

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getAnfrage(params.get('id'));
    })
  }

  getAnfrage(id: any) {
    this.anfrage$ = this.anfragenApiService.getAnfrage(id);
  }
}
