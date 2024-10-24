import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {PartnerprofilApiService} from "../../../shared/partnerprofil.service";

@Component({
  selector: 'app-settings',
  templateUrl: './partnerprofil.component.html',
})
export class PartnerprofilComponent {
  constructor(
      public partnerprofilApiService: PartnerprofilApiService,
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
    'kundeSigniert',
    'lieferant',
    'erstellt',
    'bearbeitet'
  ]

  ngOnInit(): void {
    //TODO: ID dynamisch machen
    this.partnerprofil$ = this.partnerprofilApiService.getPartnerprofil(1);
  }
}
