import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Anfrage, inits} from "../../shared/Anfrage";
import {AnfragenApiService} from "../../shared/anfrage.service";
import {AnfragenAgentApiService} from "../../shared/anfrageAgent.service";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, find, Observable, tap} from "rxjs";
import {filter, map} from "rxjs/operators";
import {AuthHelperService} from "../../shared/authHelper.service";


@Component({
  selector: 'app-profile',
  templateUrl: './anfrage-anzeigen.component.html',
})
export class AnfrageAnzeigenComponent implements OnInit {
  constructor(
      public anfragenApiService: AnfragenApiService,
      public anfragenAgentApiService: AnfragenAgentApiService,
      public authHelperService: AuthHelperService,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef,
  ) {}

  queryParams: any
  anfrage$: Observable<Anfrage>
  anfrageNotFound = false;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getAnfrage(params.get('id'));
    })
    // Forward query params
    this.route.queryParams.subscribe(params => {
      this.queryParams = params;
    })
  }

  getAnfrage(id: any) {
    this.authHelperService.isAgent().subscribe((isAgent: boolean) => {
      // Agent-Call
      if (isAgent) {
        // Agent-Call
        this.route.queryParamMap.subscribe(params => {
          this.anfrage$ = this.anfragenAgentApiService.getAnfrage(id, params.get('partnerprofil')).pipe(
            tap(anfrage => {
              if (!anfrage) {
                this.anfrageNotFound = true;
              }
              this.cdr.detectChanges();
            })
          )
        })
        // User-Call
        } else {
          this.anfrage$ = this.anfragenApiService.getAnfrage(id).pipe(
              tap(anfrage => {
                if (!anfrage) {
                  this.anfrageNotFound = true;
                }
                this.cdr.detectChanges();
              })
          )
        }
      });
  }
}
