import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorDialogComponent} from "./errors/error-dialog/error-dialog.component";
import {ErrorDialogService} from "./errors/error-dialog.service";

const sharedComponents = [ErrorDialogComponent]

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule
  ],
  exports: [...sharedComponents],
  providers: [ErrorDialogService],
  //entryComponents: [...sharedComponents],
})
export class SharedModule { }
