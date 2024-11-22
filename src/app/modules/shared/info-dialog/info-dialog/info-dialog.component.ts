import { Component, OnInit, Inject } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-error-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss'],
})
export class InfoDialogComponent {
  title: String;
  text: String;
  buttonTitle: String;

  constructor(
      public activeModal: NgbActiveModal
  ) { }
}
