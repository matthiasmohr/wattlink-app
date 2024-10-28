import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {NachrichtenApiService} from "../../../shared/nachricht.service";
import {Nachricht} from "../../../shared/Nachricht";

@Component({
  selector: 'app-nachrichten',
  templateUrl: './nachrichten.component.html',
})
export class NachrichtenComponent {
  constructor(
      public nachrichtenApiService: NachrichtenApiService,
      private route: ActivatedRoute,
  ) {}

  nachrichten$: Observable<Nachricht[]>

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.getNachrichten();
    })
  }

  getNachrichten() {
    this.nachrichten$ = this.nachrichtenApiService.getNachrichten()
  }
}
