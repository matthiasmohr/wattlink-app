import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AnfragenApiService} from "../../../shared/anfrage.service";
import {Anfrage} from "../../../shared/Anfrage";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Observable, of, tap} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {InlineSVGModule} from "ng-inline-svg-2";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AnfragenAgentApiService} from "../../../shared/anfrageAgent.service";


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
  templateUrl: '../../anfragen-liste/anfragen-liste.component.html',
  styleUrl: '../../anfragen-liste/anfragen-liste.component.scss',
})

export class AnfragenListeAgentComponent implements OnInit {
  constructor(
      public anfragenAgentApiService: AnfragenAgentApiService,
      private route: ActivatedRoute,
      private cdr: ChangeDetectorRef,) {}

  anfragen$: Observable<Anfrage[]>
  anfragenAnzahl: number
  showEmptyIntro = false
  baseLink = ""

  ngOnInit() {
    this.route.paramMap.subscribe(partnerprofil => {
      this.getAnfragen(partnerprofil.get('id'));
      this.baseLink = '/agent/partnerprofil/' + partnerprofil.get('id') + "/anfrage-anzeigen/"
    })
  }

  getAnfragen(partnerprofilID: any) {
    this.anfragen$ = this.anfragenAgentApiService.getAnfragen(partnerprofilID)
  }


    /*
    this.anfragenAgentApiService.getAnfragenAnzahl().subscribe(res => {
      this.anfragenAnzahl = res
      if (res == 0) {
        this.showEmptyIntro = true
      }
      this.cdr.detectChanges();
    })
    */

}
