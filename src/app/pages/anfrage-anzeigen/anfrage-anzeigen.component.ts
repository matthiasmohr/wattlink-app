import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Anfrage } from "../../shared/Anfrage";
import { AnfragenApiService } from "../../shared/anfrage.service";
import { AnfragenAgentApiService } from "../../shared/anfrageAgent.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthHelperService } from "../../shared/authHelper.service";

@Component({
  selector: 'app-profile',
  templateUrl: './anfrage-anzeigen.component.html',
})
export class AnfrageAnzeigenComponent implements OnInit {
  queryParams: any;
  anfrage$: Observable<Anfrage>;
  anfrageNotFound = false;
  isAgent$: Observable<boolean>;

  constructor(
    public anfragenApiService: AnfragenApiService,
    public anfragenAgentApiService: AnfragenAgentApiService,
    public authHelperService: AuthHelperService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.getAnfrage(params.get('id'));
    });
    // Forward query params
    this.route.queryParams.subscribe(params => {
      this.queryParams = params;
    });
    this.isAgent$ = this.authHelperService.isAgent();
  }

  getAnfrage(id: any) {
    this.authHelperService.isAgent().subscribe((isAgent: boolean) => {
      if (isAgent) {
        this.route.queryParamMap.subscribe(params => {
          this.anfrage$ = this.anfragenAgentApiService.getAnfrage(id, params.get('partnerprofil')).pipe(
            tap(anfrage => {
              if (!anfrage) {
                this.anfrageNotFound = true;
              }
              this.cdr.detectChanges();
            })
          );
        });
      } else {
        this.anfrage$ = this.anfragenApiService.getAnfrage(id).pipe(
          tap(anfrage => {
            if (!anfrage) {
              this.anfrageNotFound = true;
            }
            this.cdr.detectChanges();
          })
        );
      }
    });
  }
}