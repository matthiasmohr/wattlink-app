import { Component, OnInit } from '@angular/core';
import {AnfragenApiService} from "../../../../../../shared/anfrage.service";
import {Observable} from "rxjs";
import {Anfrage} from "../../../../../../shared/Anfrage";

@Component({
  selector: 'app-versorger-tab',
  templateUrl: './versorger-tab.component.html',
  styleUrls: ['./versorger-tab.component.scss'],
})
export class VersorgerTabComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
