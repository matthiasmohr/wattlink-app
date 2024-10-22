import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {Observable} from "rxjs";
import {Anfrage} from "../../shared/Anfrage";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  constructor(
      private auth: AuthService,
  ) {}

  userProfile$: Observable<any>

  ngOnInit(): void {
    this.userProfile$ = this.auth.user$
  }
}
