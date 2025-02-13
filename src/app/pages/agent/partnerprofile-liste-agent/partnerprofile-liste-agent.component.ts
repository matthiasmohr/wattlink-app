import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Observable, of, tap} from "rxjs";
import {InlineSVGModule} from "ng-inline-svg-2";
import {RouterLink} from "@angular/router";
import {PartnerprofileApiService} from "../../../shared/partnerprofil.service";
import {Partnerprofil} from "../../../shared/Partnerprofil";
import {PartnerprofileAgentApiService} from "../../../shared/partnerprofilAgent.service";
import {DropdownMenusModule} from "../../../_metronic/partials";
import {catchError, map} from "rxjs/operators";


@Component({
  selector: 'app-partnerprofil-liste-agent',
  standalone: true,
  imports: [
    NgForOf,
    InlineSVGModule,
    NgIf,
    RouterLink,
    AsyncPipe,
    DropdownMenusModule
  ],
  templateUrl: './partnerprofile-liste-agent.component.html',
  styleUrl: './partnerprofile-liste-agent.component.scss',
})
export class PartnerprofileListeAgentComponent implements OnInit {
  constructor(
      public partnerprofileAgentApiService: PartnerprofileAgentApiService,
      private cdr: ChangeDetectorRef,) {}

  partnerprofile$: Observable<Partnerprofil[]>
  partnerprofileAnzahl: number
  showEmptyIntro = false

  ngOnInit() {
    this.partnerprofile$ = this.partnerprofileAgentApiService.getPartnerprofileAgent()
  }

  onEmailAktiviertChange(event: Event, partnerprofil: any): void {
    const input = event.target as HTMLInputElement;
    partnerprofil.emailAktiviert = input.checked;
    this.partnerprofileAgentApiService.editPartnerprofilAgent(partnerprofil).pipe(
      catchError(error => {
        console.error('Email Switch failed', error);
        return of(null);
      })).subscribe()
  }

  onKategorieChange(event: Event, partnerprofil: Partnerprofil, field: keyof Partnerprofil): void {
    const input = event.target as HTMLInputElement;
    (partnerprofil[field] as boolean) = input.checked;
    this.partnerprofileAgentApiService.editPartnerprofilAgent(partnerprofil).pipe(
      catchError(error => {
        console.error('Kategorie Update failed', error);
        return of(null);
      })
    ).subscribe();
  }

  onDelete(partnerprofil: Partnerprofil): void {
    // Remove from server
    this.partnerprofileAgentApiService.deletePartnerprofilAgent(partnerprofil).pipe(
      catchError(error => {
        console.error('Delete failed', error);
        return of(null);
      })).subscribe()
    // Parallel update the UI
    this.partnerprofile$ = this.partnerprofile$.pipe(
      map(partnerprofileList => partnerprofileList.filter(p => p.partnerprofilID !== partnerprofil.partnerprofilID))
    );
  }

}
