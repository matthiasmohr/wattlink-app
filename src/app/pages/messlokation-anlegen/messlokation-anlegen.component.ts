import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {BehaviorSubject, delay, Observable, of, Subscription, tap} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {InlineSVGModule} from "ng-inline-svg-2";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MesslokationenApiService} from "../../shared/messlokation.service";
import {Messlokation, messlokationInit} from "../../shared/Messlokation";
import { Location } from '@angular/common'
import {MesslokationenComponent} from "../anfrage-anzeigen/messlokationen/messlokationen.component";
import {Anfrage, inits} from "../../shared/Anfrage";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-messlokation-anlegen',
  standalone: true,
  imports: [
    NgForOf,
    InlineSVGModule,
    NgIf,
    RouterLink,
    AsyncPipe,
    FormsModule
  ],
  templateUrl: './messlokation-anlegen.component.html',
  styleUrl: './messlokation-anlegen.component.scss',
})
export class MesslokationAnlegenComponent implements OnInit {
  constructor(
      public messlokationenApiService: MesslokationenApiService,
      private cdr: ChangeDetectorRef,
      private location: Location,
      private route: ActivatedRoute,
  ) {}

  id: any = ""
  //messlokation: Messlokation = {} as Messlokation; // TODO: Clean Melo
  messlokation = messlokationInit // TODO: REMOVE
  profile = ['H0', 'G0', 'G1']

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];

  ngOnInit() {
    const loadingSubscr = this.isLoading$
        .asObservable()
        .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      if (params.get('id') != null) {
        this.messlokationenApiService.getMesslokation(this.id).subscribe(res => {
          this.messlokation = res
          this.cdr.detectChanges();
        })
      }
      //this.getAnfrage(params.get('id'));
    })
  }

  save() {
    this.isLoading$.next(true);
    this.messlokationenApiService.createMesslokation(this.messlokation).subscribe(res => {
      this.isLoading$.next(false);
      this.messlokation = res;
      //this.cdr.detectChanges();
      this.location.back()
    })
  }

  cancel() {
    this.location.back()
  }

}
