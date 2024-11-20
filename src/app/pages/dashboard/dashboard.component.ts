import { Component, OnInit } from '@angular/core';
import {ErrorDialogService} from "../../modules/shared/errors/error-dialog.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
      private errorDialogService: ErrorDialogService,
      private http: HttpClient
  ) {}

  ngOnInit(): void {}

  test() {
    this.errorDialogService.showMessage("A", "B")
  }
  test2() {
    throw Error('The app component has thrown an error!');
  }
  test3() {
    this.http.get('https://httpstat.us/404?sleep=2000').toPromise();
  }
}
