import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Anfrage } from '../../../../shared/Anfrage';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
})
export class Step4Component implements OnInit, OnDestroy {
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
      firma: [this.defaultValues.firma, [Validators.required]],
      vorname: [this.defaultValues.vorname, [Validators.required]],
      nachname: [this.defaultValues.nachname, [Validators.required]],
      email: [this.defaultValues.email, [Validators.required, Validators.email]],
      telefon: [this.defaultValues.telefon, [Validators.required]],
      anfragesteller: [this.defaultValues.anfragesteller, [Validators.required]],
      anfragestellerBeschreibung: [this.defaultValues.anfragestellerBeschreibung, [Validators.required]],
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !(
        this.form.get('businessName')?.hasError('required') ||
        this.form.get('businessDescriptor')?.hasError('required') ||
        this.form.get('businessType')?.hasError('required') ||
        this.form.get('businessEmail')?.hasError('required') ||
        this.form.get('businessEmail')?.hasError('email')
    );
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
