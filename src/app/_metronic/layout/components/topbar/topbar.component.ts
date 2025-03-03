import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import { AuthHelperService } from 'src/app/shared/authHelper.service';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit {
  constructor(
    private authHelperService: AuthHelperService,
  ) {}

  protected readonly environment = environment;

  isAgent$: Observable<boolean>;

  ngOnInit(): void {
    this.isAgent$ = this.authHelperService.isAgent();
  }
}
