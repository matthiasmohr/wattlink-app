import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent implements OnInit {
  constructor(
      private auth: AuthService,
  ) {}

  userProfile: any;

  ngOnInit(): void {
    this.auth.user$.subscribe ( profile => (
            this.userProfile = profile
        )
    );
  }
}
