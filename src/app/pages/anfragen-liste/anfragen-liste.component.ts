import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AnfragenApiService} from "../../shared/anfrage.service";
import {Anfrage} from "../../shared/Anfrage";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Observable, of, tap} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {InlineSVGModule} from "ng-inline-svg-2";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AnfragenAgentApiService} from "../../shared/anfrageAgent.service";
import {AuthHelperService} from "../../shared/authHelper.service";


@Component({
  selector: 'app-anfragen-liste',
  standalone: true,
  imports: [
    NgForOf,
    InlineSVGModule,
    NgIf,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './anfragen-liste.component.html',
  styleUrl: './anfragen-liste.component.scss',
})

export class AnfragenListeComponent implements OnInit {
  constructor(
      public anfragenApiService: AnfragenApiService,
      public anfragenAgentApiService: AnfragenAgentApiService,
      public authHelperService: AuthHelperService,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef
      ) {}

  queryParams: any
  anfragen$: Observable<Anfrage[]>
  anfragenAnzahl: number
  showEmptyIntro = false

  baseLink = '/anfrage-anzeigen/'

  ngOnInit() {
    this.authHelperService.isAgent().subscribe((isAgent: boolean) => {
      this.route.queryParamMap.subscribe(params => {
        // Agent-Call
        if (isAgent && params.get('partnerprofil')) {
          const partnerprofil = params.get('partnerprofil');
          this.anfragen$ = this.anfragenAgentApiService.getAnfragen(partnerprofil);
          this.anfragenAgentApiService.getAnfragenAnzahl(partnerprofil).subscribe(res => {
            this.anfragenAnzahl = res;
          });
        // User-Call
        } else {
          this.anfragen$ = this.anfragenApiService.getAnfragen();
          this.anfragenApiService.getAnfragenAnzahl().subscribe(res => {
            this.anfragenAnzahl = res;
            if (res === 0) {
              this.showEmptyIntro = true;
            }
          });
        }
        this.cdr.detectChanges();
      })
      // Forward query params
      this.route.queryParams.subscribe(params => {
        this.queryParams = params;
      })
    });
  }
}
