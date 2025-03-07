import {Component, Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {InlineSVGModule} from "ng-inline-svg-2";

@Component({
  selector: 'app-dateien-card',
  standalone: true,
  imports: [CommonModule, RouterLink, InlineSVGModule],
  templateUrl: './dateien-card.component.html',
})
export class DateienCardComponent {
  @Input() fileNameUser: string;
  @Input() dateiID: string;
  @Input() anfrageID: string;
  @Input() angebotID: string;
  @Input() updatedAt: string;
  @Output() download = new EventEmitter<string>();

  onDownload() {
    this.download.emit(this.dateiID);
  }
}