import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {AngeboteApiService} from "../../../../shared/angebot.service";
import {Angebot} from "../../../../shared/Angebot";
import {HttpErrorResponse} from "@angular/common/http";
import {InfoDialogService} from "../../../../modules/shared/info-dialog/info-dialog.service";


@Component({
  selector: 'app-campaigns',
  templateUrl: '../../../anfrage-anzeigen/angebote/angebote.component.html',
})
export class AngeboteAgentComponent implements OnInit{
  constructor(
      public angeboteApiService: AngeboteApiService,
      private route: ActivatedRoute,
      private dialogService: InfoDialogService
  ) {}

  angebote$: Observable<Angebot[]>
  isLoading: boolean

  ngOnInit(): void {
    this.isLoading = true
    this.route.parent?.paramMap.subscribe(params => {
      this.getAngebote(params.get('id'));
      this.isLoading = false
    })
  }

  getAngebote(anfrageID: any) {
    this.angebote$ = this.angeboteApiService.getAngebote(anfrageID)
  }

  getDetails(angebot: Angebot) {
    this.dialogService.showMessage(
        angebot.angebotTitel + " von " + angebot.angebotenVonKurzbeschreibung,
        angebot.angebotLangbeschreibung,
    )
  }

}
