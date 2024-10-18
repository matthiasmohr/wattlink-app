import {Component, OnInit} from '@angular/core';
import {AnfrageAnzeigenComponent} from "../anfrage-anzeigen.component";
import {AnfragenApiService} from "../../../shared/anfrage.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Anfrage} from "../../../shared/Anfrage";

@Component({
  selector: 'app-overview',
  templateUrl: './anfrageparameter.component.html',
})
export class AnfrageparameterComponent implements OnInit {
  constructor(      public anfragenApiService: AnfragenApiService,
                    private route: ActivatedRoute
  ) {}

  anfrage$: Observable<Anfrage>

  ngOnInit() {
    this.route.parent?.paramMap.subscribe(params => {
      this.getAnfrage(params.get('id'));
    })
  }

  getAnfrage(id: any) {
    this.anfrage$ = this.anfragenApiService.getAnfrage(id);
  }
}
