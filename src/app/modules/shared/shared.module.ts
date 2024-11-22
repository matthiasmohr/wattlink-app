import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorDialogComponent} from "./errors/error-dialog/error-dialog.component";
import {ErrorDialogService} from "./errors/error-dialog.service";
import {InfoDialogComponent} from "./info-dialog/info-dialog/info-dialog.component";
import {InfoDialogService} from "./info-dialog/info-dialog.service";

const sharedComponents = [ErrorDialogComponent, InfoDialogComponent]

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule
  ],
  exports: [...sharedComponents],
  providers: [ErrorDialogService, InfoDialogService],
  //entryComponents: [...sharedComponents],
})
export class SharedModule { }
