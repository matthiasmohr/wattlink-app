import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Anfrage, inits} from "../../../shared/Anfrage";
import {AnfragenAgentApiService} from "../../../shared/anfrageAgent.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, find, Observable, tap} from "rxjs";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-agent-anfrage-anzeigen',
  templateUrl: '../../anfrage-anzeigen/anfrage-anzeigen.component.html',
})
export class AnfrageAnzeigenAgentComponent implements OnInit {
  constructor(
      public anfragenAgentApiService: AnfragenAgentApiService,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef,
  ) {}

  anfrage$: Observable<Anfrage>

  ngOnInit() {
    this.route.paramMap.subscribe(route2 => {
      this.route.parent?.paramMap.subscribe(route1 => {
        this.getAnfrage(route1.get('partnerprofilid'), route2.get('anfrageid'));
      })
    })
  }

  getAnfrage(usr: any, id: any) {
    this.anfrage$ = this.anfragenAgentApiService.getAnfrage(usr, id);
    this.cdr.detectChanges();
  }
}
