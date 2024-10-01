import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Anfrage } from '../../../../shared/Anfrage';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component implements OnInit, OnDestroy {
  @Input('updateParentModel') updateParentModel: (part: Partial<Anfrage>, isFormValid: boolean) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<Anfrage>;
  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, true);
  }

  initForm() {
    this.form = this.fb.group({
      jahresverbrauchStrom: [this.defaultValues.jahresverbrauchStrom, [Validators.required]],
      oekostrom: [this.defaultValues.oekostrom, [Validators.required]],
      jahresverbrauchGas: [this.defaultValues.jahresverbrauchGas, [Validators.required]],
      biogas: [this.defaultValues.biogas, [Validators.required]],
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, true);
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
