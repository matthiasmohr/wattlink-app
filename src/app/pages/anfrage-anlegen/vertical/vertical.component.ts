import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Anfrage, inits } from '../../../shared/Anfrage';
import {MesslokationenApiService} from "../../../shared/messlokation.service";
import {AnfragenApiService} from "../../../shared/anfrage.service";

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
})
export class VerticalComponent implements OnInit, OnDestroy {
  formsCount = 5;
  anfrage$: BehaviorSubject<Anfrage> = new BehaviorSubject<Anfrage>(inits);
  currentStep$: BehaviorSubject<number> = new BehaviorSubject(1);
  isCurrentFormValid$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  isLoading: boolean;

  private unsubscribe: Subscription[] = [];

  constructor(
      public anfragenApiService: AnfragenApiService,
      private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
  }

  updateAccount = (part: Partial<Anfrage>, isFormValid: boolean) => {
    const currentAccount = this.anfrage$.value;
    const updatedAccount = { ...currentAccount, ...part };
    this.anfrage$.next(updatedAccount);
    this.isCurrentFormValid$.next(isFormValid);
    console.log(isFormValid);
  };

  nextStep() {
    const nextStep = this.currentStep$.value + 1;
    if (nextStep > this.formsCount) {
      return;
    }
    this.currentStep$.next(nextStep);
  }

  prevStep() {
    const prevStep = this.currentStep$.value - 1;
    if (prevStep === 0) {
      return;
    }
    this.currentStep$.next(prevStep);
  }

  submit() {
    this.isLoading = true;
    // TODO: Checken ob das Objekt gültig ist
    this.anfragenApiService.createAnfrage(this.anfrage$.value).subscribe(res => {
      this.isLoading = false;
      this.nextStep()
      this.cdr.detectChanges();
    })
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
