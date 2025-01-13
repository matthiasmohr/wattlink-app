import {Injectable} from '@angular/core';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import {NgbActiveModal, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Injectable({
  providedIn: 'root' // ✅ Stellt sicher, dass nur eine Instanz existiert
})
export class ErrorDialogService {
  constructor(public modalService: NgbModal) {}

  public showMessage(title: string, text: string) {
    const modalRef = this.modalService.open(
        ErrorDialogComponent
    );
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.text = text;
    modalRef.componentInstance.buttonTitle = "OK";
  }
}
