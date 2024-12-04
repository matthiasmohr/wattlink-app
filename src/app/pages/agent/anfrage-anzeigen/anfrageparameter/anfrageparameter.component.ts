import {Component, OnInit} from '@angular/core';
import {AnfrageAnzeigenAgentComponent} from "../anfrage-anzeigen.component";
import {AnfragenApiService} from "../../../../shared/anfrage.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Anfrage} from "../../../../shared/Anfrage";

@Component({
  selector: 'app-overview',
  templateUrl: '../../../anfrage-anzeigen/anfrageparameter/anfrageparameter.component.html',
})
export class AnfrageparameterAgentComponent implements OnInit {
  constructor(      public anfragenApiService: AnfragenApiService,
                    private route: ActivatedRoute,
                    private anfrageAnzeigenComponent: AnfrageAnzeigenAgentComponent
  ) {}

  anfrage$: Observable<Anfrage | undefined>

  ngOnInit() {
    this.anfrage$ = this.anfrageAnzeigenComponent.anfrage$;
    this.route.parent?.paramMap.subscribe(params => {
      this.getAnfrage(params.get('id'));
    })
  }

  getAnfrage(id: any) {
    //this.anfrage$ = this.anfragenApiService.getAnfrage(id); // Ersetzt durch Rückgriff auf Parent
  }
}
