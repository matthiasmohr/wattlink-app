import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Anfrage } from '../../../../shared/Anfrage';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
})
export class Step2Component implements OnInit, OnDestroy {
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
      anzahlLieferstellen: [this.defaultValues.anzahlLieferstellen, [Validators.required]],
      anfrageBezeichnung: [this.defaultValues.anfrageBezeichnung, [Validators.required]],
      informationsergaenzung: [this.defaultValues.informationsergaenzung, [Validators.required]],
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }
  
  checkForm() {
    return !(
        this.form.get('anzahlLieferstellen')?.hasError('required') ||
        this.form.get('anfrageBezeichnung')?.hasError('required') ||
        this.form.get('informationsergaenzung')?.hasError('required')
    );
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
