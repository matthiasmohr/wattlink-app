import { Component } from '@angular/core';
import {PartnerprofileApiService} from "../../../../shared/partnerprofil.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
})
export class Step5Component {
  constructor(
      public partnerprofileApiService: PartnerprofileApiService,
  ) {}

  partnerprofil$: Observable<any>;

  ngOnInit(): void {
    //TODO: ID dynamisch machen
    this.partnerprofil$ = this.partnerprofileApiService.getPartnerprofil();
  }}
