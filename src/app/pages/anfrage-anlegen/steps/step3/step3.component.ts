import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Anfrage } from '../../../../shared/Anfrage';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
})
export class Step3Component implements OnInit, OnDestroy {
  @Input('updateParentModel') updateParentModel: (
    part: Partial<Anfrage>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<Anfrage>;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());
  }

  initForm() {
    this.form = this.fb.group({
      beschaffungsstrategie: [this.defaultValues.beschaffungsstrategie, [Validators.required]],
      mengenflexibilitaetStrom: [this.defaultValues.mengenflexibilitaetStrom, [Validators.required]],
      mengenflexibilitaetGas: [this.defaultValues.mengenflexibilitaetGas, [Validators.required]],
      lieferbeginn: [this.defaultValues.lieferbeginn, [Validators.required]],
      wasIstWichtig: [this.defaultValues.wasIstWichtig],
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !(
      this.form.get('beschaffungsstrategie')?.hasError('required') ||
      this.form.get('mengenflexibilitaetStrom')?.hasError('required') ||
      this.form.get('mengenflexibilitaetGas')?.hasError('required') ||
      this.form.get('lieferbeginn')?.hasError('required')
    );
  }

  formatDate(date: any): string {
    if (!date) return '';
    const day = ('0' + date.day).slice(-2); // Zwei-stellig (01, 02, ..., 31)
    const month = ('0' + date.month).slice(-2); // Zwei-stellig (01, 02, ..., 12)
    return `${day}.${month}.${date.year}`; // Format: TT.MM.JJJJ
  }

  onDateSelect(date: any) {
    if (date) {
      const formattedDate = this.formatDate(date);
      this.form.patchValue({ lieferbeginn: formattedDate });
      this.form.get('lieferbeginn')?.updateValueAndValidity();
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
