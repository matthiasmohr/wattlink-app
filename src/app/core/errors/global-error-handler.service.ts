import { HttpErrorResponse } from '@angular/common/http';
import {ErrorHandler, inject, Injectable, Injector, NgZone} from '@angular/core';
import { ErrorDialogService } from '../../modules/shared/errors/error-dialog.service';

@Injectable({
    providedIn: 'root'
})

export class GlobalErrorHandlerService implements ErrorHandler {
    // TODO: Extend Remote Logging (e.g. https://www.telerik.com/blogs/implementing-global-error-handler-angular-step-guide)
    constructor(private injector: Injector,) {}

    handleError(error: any) {
        // Load the errorDialog crazily -> Otherwise we would get circular references
        const errorDialogService = this.injector.get(ErrorDialogService)

        // Check if it's an error from an HTTP response
        if (!(error instanceof HttpErrorResponse)) {
            error = error.rejection; // get the error object
        }

        errorDialogService.showMessage(
            error?.status || 'Undefined client error',
            error?.message || 'Undefined client error',
        )

        console.error('Error from global error handler: ', error);
    }
}
