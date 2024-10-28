import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {PartnerprofileApiService} from "../../../shared/partnerprofil.service";

@Component({
  selector: 'app-settings',
  templateUrl: './partnerprofil.component.html',
})
export class PartnerprofilAnzeigenComponent {
  constructor(
      public partnerprofileApiService: PartnerprofileApiService,
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
    this.partnerprofil$ = this.partnerprofileApiService.getPartnerprofil(1);
  }
}
