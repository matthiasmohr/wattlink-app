import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {NachrichtenAgentApiService} from "src/app/shared/nachrichtAgent.service";
import {Nachricht} from "src/app/shared/Nachricht";
import {AuthHelperService} from "src/app/shared/authHelper.service";
import {messlokationInit} from "../../../shared/Messlokation";
import { Location } from '@angular/common'

interface FieldConfig {
  name: keyof Nachricht;
  label: string;
  type: string;
  validations: any[];
}

@Component({
  selector: 'app-nachricht-erstellen',
  templateUrl: './nachricht-erstellen.component.html',
})
export class NachrichtErstellenComponent implements OnInit {
  constructor(
      public nachrichtenAgentApiService: NachrichtenAgentApiService,
      private route: ActivatedRoute,
      public authHelperService: AuthHelperService,
      private cdr: ChangeDetectorRef,
      private location: Location,
  ) {}

  anfrageID: any
  nachricht: Nachricht = {} as Nachricht
  isLoading: boolean;
  lockForEdit: boolean;

  fields: FieldConfig[] = [
    {
      name: 'nachrichtTitel',
      label: 'Titel',
      type: 'text',
      validations: [
        { name: 'required', message: 'Titel ist erforderlich' },
        { name: 'minlength', value: 4, message: 'Titel ist zu kurz' }
      ]
    },
    {
      name: 'nachrichtInhalt',
      label: 'Inhalt der Nachricht',
      type: 'text',
      validations: [
        { name: 'required', message: 'Nachricht ist erforderlich' },
        { name: 'minlength', value: 4, message: 'Nachricht ist zu kurz' }
      ]
    },
    {name: 'erzeuger', label: 'Absender', type: 'text', validations: [{ name: 'required', message: 'Absender ist erforderlich' }]},
    {name: 'icon', label: 'icon', type: 'text', validations: []},
    {name: 'stil', label: 'Stil', type: 'text', validations: []},
  ];

  checkRequired(validations: any[]): boolean {
    return validations.some(validation => validation.name === 'required');
  }

  getMinLength(validations: any[]): number | null {
    const minLengthValidation = validations.find(validation => validation.name === 'minlength');
    return minLengthValidation ? minLengthValidation.value : null;
  }

  ngOnInit(): void {
    this.isLoading = true
    this.route.parent?.paramMap.subscribe(params => {
      this.anfrageID = params.get('id')
      this.nachricht.anfrageID = params.get('id') || '';
      this.isLoading = false
    })
    this.route.queryParamMap.subscribe(params => {
      this.nachricht.partnerprofilID = params.get('partnerprofil') || '';
    });
  }

  createNachricht() {
    this.isLoading = true;
    this.nachrichtenAgentApiService.createNachricht(this.nachricht).subscribe((res: Nachricht) => {
      this.isLoading = false
      this.nachricht = res;
      //this.cdr.detectChanges();
      this.location.back()
    })
  }

  cancel() {
    this.location.back()
  }
}
