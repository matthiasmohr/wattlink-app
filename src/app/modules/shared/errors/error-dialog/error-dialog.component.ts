import { Component, OnInit, Inject } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
})
export class ErrorDialogComponent {
  title: String;
  text: String;
  buttonTitle: String;

  constructor(
      public activeModal: NgbActiveModal
  ) { }
}
