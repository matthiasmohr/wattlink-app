import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {NachrichtenApiService} from "../../../shared/nachricht.service";
import {Nachricht} from "../../../shared/Nachricht";

@Component({
  selector: 'app-nachrichten',
  templateUrl: './nachrichten.component.html',
})
export class NachrichtenComponent implements OnInit {
  constructor(
      public nachrichtenApiService: NachrichtenApiService,
      private route: ActivatedRoute,
  ) {}

  nachrichten$: Observable<Nachricht[]>
  isLoading: boolean

  ngOnInit(): void {
    this.isLoading = true
    this.route.paramMap.subscribe(params => {
      this.getNachrichten();
      this.isLoading = false
    })
  }

  getNachrichten() {
    this.nachrichten$ = this.nachrichtenApiService.getNachrichten()
  }
}
