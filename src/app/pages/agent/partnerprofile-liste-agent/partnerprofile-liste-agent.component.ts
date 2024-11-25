import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Observable, of, tap} from "rxjs";
import {InlineSVGModule} from "ng-inline-svg-2";
import {RouterLink} from "@angular/router";
import {PartnerprofileApiService} from "../../../shared/partnerprofil.service";
import {Partnerprofil} from "../../../shared/Partnerprofil";
import {PartnerprofileAgentApiService} from "../../../shared/partnerprofilAgent.service";


@Component({
  selector: 'app-partnerprofil-liste-agent',
  standalone: true,
  imports: [
    NgForOf,
    InlineSVGModule,
    NgIf,
    RouterLink,
    AsyncPipe
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

}
