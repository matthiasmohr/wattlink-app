import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PartnerprofileApiService} from "../../../shared/partnerprofil.service";
import {PartnerprofileAgentApiService} from "../../../shared/partnerprofilAgent.service";
import {AuthHelperService} from "src/app/shared/authHelper.service"
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './partnerprofil.component.html',
  styleUrl: './partnerprofil.component.scss',
})
export class PartnerprofilAnzeigenComponent implements OnInit {
  constructor(
      public partnerprofileApiService: PartnerprofileApiService,
      public partnerprofileAgentApiService: PartnerprofileAgentApiService,
      public authHelperService: AuthHelperService,
      private route: ActivatedRoute,
  ) {}

  queryParams: any;
  partnerprofil$: Observable<any>;
  hasPermission$: Observable<boolean>;
  isAgent$: Observable<boolean>;
  isLoading = false;

  attributes = [
    'email',
    'vorname',
    'nachname',
    'firma',
    'plz',
    'stadt',
    'strasse',
    'hausnummer',
    'position',
    'telefon',
  ]

  agentattributes = [
    'kundeAktiviert',
    'kundeStatus',
    'docuSignEnvelopeID',
    'erstellt',
    'bearbeitet',
  ]

  ngOnInit(): void {
    this.hasPermission$ = this.authHelperService.hasPermission('agent:full');
    this.isAgent$ = this.authHelperService.isAgent();
    this.getPartnerprofil();
  }

  getPartnerprofil() {
    this.authHelperService.isAgent().subscribe((isAgent: boolean) => {
      this.route.queryParamMap.subscribe(params => {
        // Agent-Call
        if (isAgent && params.get('partnerprofil')) {
          const partnerprofil = params.get('partnerprofil');
          this.partnerprofil$ = this.partnerprofileAgentApiService.getPartnerprofilAgent(partnerprofil);
          // User-Call
        } else {
          this.partnerprofil$ = this.partnerprofileApiService.getPartnerprofil();
        }
      })
      // Forward query params
      this.route.queryParams.subscribe(params => {
        this.queryParams = params;
      })
    });
  }

  triggerSigning() {
    this.isLoading = true;
    this.partnerprofil$.subscribe(partnerprofil => {
      this.partnerprofileApiService.aktivierenPartnerprofil(partnerprofil).subscribe(response => {
        this.isLoading = false;
        window.location.href = response.signingURL;
      });
    });
  }
}
