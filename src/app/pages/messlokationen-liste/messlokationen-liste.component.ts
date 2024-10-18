import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Observable, of, tap} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {InlineSVGModule} from "ng-inline-svg-2";
import {RouterLink} from "@angular/router";
import {MesslokationenApiService} from "../../shared/messlokation.service";
import {Messlokation} from "../../shared/Messlokation";


@Component({
  selector: 'app-messlokationen-liste',
  standalone: true,
  imports: [
    NgForOf,
    InlineSVGModule,
    NgIf,
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './messlokationen-liste.component.html',
  styleUrl: './messlokationen-liste.component.scss',
})
export class MesslokationenListeComponent implements OnInit {
  constructor(public messlokationenApiService: MesslokationenApiService) {}

  messlokationen$: Observable<Messlokation[]>

  ngOnInit() {
    this.messlokationen$ = this.messlokationenApiService.getMesslokationen(1)
  }
}
