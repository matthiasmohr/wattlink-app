import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Anfrage } from "../../shared/Anfrage";
import { AnfragenApiService } from "../../shared/anfrage.service";
import { AnfragenAgentApiService } from "../../shared/anfrageAgent.service";
import { ActivatedRoute } from "@angular/router";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
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

  statusOptions: { value: string, label: string }[] = [
    { value: 'offen', label: 'Offen' },
    { value: 'in_bearbeitung', label: 'In Bearbeitung' },
    { value: 'abgeschlossen', label: 'Abgeschlossen' }
  ];

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

  onStatusChange(event: Event, anfrage: any): void {
    const select = event.target as HTMLSelectElement;
    anfrage.status = select.value;
    this.anfragenAgentApiService.editAnfrage(anfrage).pipe(
      catchError(error => {
        console.error('Status update failed', error);
        return of(null);
      })
    ).subscribe();
  }

  onFortschrittChange(event: Event, anfrage: any): void {
    const input = event.target as HTMLInputElement;
    anfrage.fortschritt = input.valueAsNumber;
    this.anfragenAgentApiService.editAnfrage(anfrage).pipe(
      catchError(error => {
        console.error('Progress update failed', error);
        return of(null);
      })
    ).subscribe();
  }
}