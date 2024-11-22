import {Injectable} from '@angular/core';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import {NgbActiveModal, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Injectable()

export class InfoDialogService {
  constructor(public modalService: NgbModal) {}

  public showMessage(title: string, text: string) {
    const modalRef = this.modalService.open(
        InfoDialogComponent
    );
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.text = text;
    modalRef.componentInstance.buttonTitle = "OK";
  }
}
