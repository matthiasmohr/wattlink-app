import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {PartnerprofileApiService} from "../../../shared/partnerprofil.service";
import {AuthHelperService} from "src/app/shared/authHelper.service"

@Component({
  selector: 'app-settings',
  templateUrl: './partnerprofil.component.html',
})
export class PartnerprofilAnzeigenComponent implements OnInit {
  constructor(
      public partnerprofileApiService: PartnerprofileApiService,
      public authHelperService: AuthHelperService,
  ) {}

  partnerprofil$: Observable<any>;

  attributes = [
    'id',
    'email',
    'vorname',
    'nachname',
    'firma',
    'position',
    'telefon',
    'kunde',
    'kundeAktiviert',
    'lieferant',
    'erstellt',
    'bearbeitet'
  ]

  ngOnInit(): void {
    //TODO: ID dynamisch machen
    this.partnerprofil$ = this.partnerprofileApiService.getPartnerprofil();
    this.hasPermission$ = this.authHelperService.hasPermission('agent:full');
  }

  hasPermission$: Observable<boolean>;

}
