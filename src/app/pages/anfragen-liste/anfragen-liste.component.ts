import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AnfragenApiService} from "../../shared/anfrage.service";
import {Anfrage} from "../../shared/Anfrage";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Observable, of, tap} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {InlineSVGModule} from "ng-inline-svg-2";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-anfragen-liste',
  standalone: true,
  imports: [
    NgForOf,
    InlineSVGModule,
    NgIf,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './anfragen-liste.component.html',
  styleUrl: './anfragen-liste.component.scss',
})
export class AnfragenListeComponent implements OnInit {
  constructor(
      public anfragenApiService: AnfragenApiService,
      private cdr: ChangeDetectorRef,) {}

  anfragen$: Observable<Anfrage[]>
  anfragenAnzahl: number
  showEmptyIntro = false

  ngOnInit() {
    this.anfragen$ = this.anfragenApiService.getAnfragen()

    this.anfragenApiService.getAnfragenAnzahl().subscribe(res => {
      this.anfragenAnzahl = res
      if (res == 0) {
        this.showEmptyIntro = true
      }
      this.cdr.detectChanges();
    })
  }

}
