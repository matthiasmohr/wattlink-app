import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, tap} from "rxjs";
import {NachrichtenApiService} from "src/app/shared/nachricht.service";
import {NachrichtenAgentApiService} from "src/app/shared/nachrichtAgent.service";
import {Nachricht} from "src/app/shared/Nachricht";
import {AuthHelperService} from "src/app/shared/authHelper.service";

@Component({
  selector: 'app-nachrichten',
  templateUrl: './nachrichten.component.html',
})
export class NachrichtenComponent implements OnInit {
  constructor(
      public nachrichtenApiService: NachrichtenApiService,
      public nachrichtenAgentApiService: NachrichtenAgentApiService,
      private route: ActivatedRoute,
      public authHelperService: AuthHelperService,
  ) {}

  anfrageID: any
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
    this.authHelperService.isAgent().subscribe((isAgent: boolean) => {
      this.route.parent?.paramMap.subscribe(params => {
        this.anfrageID = params.get('id')
        if (isAgent) {
          // Agent-Call
          this.route.queryParamMap.subscribe(params => {
            this.nachrichten$ = this.nachrichtenAgentApiService.getNachrichten(params.get('partnerprofil'), this.anfrageID)
          })
          // User-Call
        } else {
          this.nachrichten$ = this.nachrichtenApiService.getNachrichten(this.anfrageID)
        }
      })
    })
  }
}
