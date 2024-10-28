import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {BehaviorSubject, delay, Observable, of, Subscription, tap} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {InlineSVGModule} from "ng-inline-svg-2";
import {ActivatedRoute, RouterLink} from "@angular/router";
import { Location } from '@angular/common'
import {FormsModule} from "@angular/forms";
import {PartnerprofileApiService} from "../../../shared/partnerprofil.service";
import {Partnerprofil} from "../../../shared/Partnerprofil";
import {SharedModule} from "../../../_metronic/shared/shared.module";


@Component({
  selector: 'app-partnerprofil-anlegen',
  standalone: true,
  imports: [
    NgForOf,
    InlineSVGModule,
    NgIf,
    RouterLink,
    AsyncPipe,
    FormsModule,
    SharedModule
  ],
  templateUrl: './partnerprofil-anlegen.component.html',
  styleUrl: './partnerprofil-anlegen.component.scss',
})
export class PartnerprofilAnlegenComponent implements OnInit {
  constructor(
      public partnerprofileApiService: PartnerprofileApiService,
      private cdr: ChangeDetectorRef,
      private location: Location,
      private route: ActivatedRoute,
  ) {}

  id: any = ""
  partnerprofil: Partnerprofil = {} as Partnerprofil;

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];

  ngOnInit() {
    const loadingSubscr = this.isLoading$
        .asObservable()
        .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);

    // TODO: Partnerprofil dynamisch machen
    this.partnerprofileApiService.getPartnerprofil(1).subscribe(res => {
      this.partnerprofil = res
      console.log(this.partnerprofil)
      this.cdr.detectChanges();
    })

  }

  save() {
    this.isLoading$.next(true);
    this.partnerprofileApiService.editPartnerprofil(this.partnerprofil).subscribe(res => {
      this.isLoading$.next(false);
      this.partnerprofil = res;
      //this.cdr.detectChanges();
      this.location.back()
    })
  }

  cancel() {
    this.location.back()
  }

}
