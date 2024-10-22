import { Component, OnInit } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Observable} from "rxjs";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {
  constructor(
      private auth: AuthService,
  ) {}

  userProfile$: Observable<any>;

  attributes = [
    'name',
    'given_name',
    'family_name',
    'middle_name',
    'nickname',
    'preferred_username',
    'profile',
    'picture',
    'website',
    'email',
    'email_verified',
    'gender',
    'birthdate',
    'zoneinfo',
    'locale',
    'phone_number',
    'phone_number_verified',
    'address',
    'updated_at',
    'sub'
  ]

  ngOnInit(): void {
    this.userProfile$ = this.auth.user$
  }
}
